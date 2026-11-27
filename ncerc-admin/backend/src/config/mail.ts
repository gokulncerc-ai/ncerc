import nodemailer from 'nodemailer';
import { env, isProd } from './env';

export { otpEmail, passwordResetEmail, welcomeEmail } from './mailTemplates';

interface MailInput {
  to: string;
  subject: string;
  html: string;
  /** plain-text alternative (better deliverability, and used by clients that block HTML) */
  text?: string;
  /** printed to the console when mail is not configured (development only) */
  devPreview?: string;
}

const BREVO_API = 'https://api.brevo.com/v3';
const brevoKey = env.BREVO_API_KEY?.trim();
/** HTTPS (port 443) works on Render's free tier; SMTP ports 25/465/587 are blocked there. */
const useBrevoApi = Boolean(brevoKey);

const smtpUser = env.SMTP_USER?.trim();
const smtpPass = env.SMTP_PASS?.trim();
const smtpConfigured = Boolean(env.SMTP_HOST && smtpUser && smtpPass);
const secure = env.SMTP_PORT === 465;

// SMTP is only used when there is no Brevo API key (for example local development)
const transporter =
  !useBrevoApi && smtpConfigured
    ? nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure, // true only for port 465
      requireTLS: !secure, // STARTTLS on 587 / 2525
      auth: { user: smtpUser!, pass: smtpPass! },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    })
    : null;

export const isMailConfigured = useBrevoApi || transporter !== null;

/** "NCERC Admin <no-reply@x.in>" -> { name, email }; a bare address works too. */
const parseFrom = (value: string): { name?: string; email: string } => {
  const m = value.match(/^\s*"?([^"<]*?)"?\s*<([^>]+)>\s*$/);
  return m ? { name: m[1].trim() || undefined, email: m[2].trim() } : { email: value.trim() };
};

const smtpHint = (err: Error & { responseCode?: number }): string => {
  if (err.responseCode !== 535) return '';
  return [
    'Brevo rejected the SMTP login. Check:',
    `  - SMTP_USER is the login shown on Brevo "SMTP & API > SMTP" (currently: ${smtpUser})`,
    `  - SMTP_PASS is an SMTP key ("xsmtpsib-..."), currently starts with "${smtpPass?.slice(0, 9)}" (length ${smtpPass?.length})`,
    '  - quote the value in .env if it contains "#", and restart the server after editing .env',
  ].join('\n');
};

const sendViaBrevoApi = async ({ to, subject, html, text }: MailInput): Promise<void> => {
  const res = await fetch(`${BREVO_API}/smtp/email`, {
    method: 'POST',
    headers: { 'api-key': brevoKey!, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: parseFrom(env.MAIL_FROM),
      to: [{ email: to }],
      subject,
      htmlContent: html,
      ...(text ? { textContent: text } : {}),
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!res.ok) throw new Error(`Brevo API ${res.status}: ${(await res.text()).slice(0, 300)}`);
};

/** Call once at startup so wrong credentials show up immediately, not on the first email. */
export const verifyMail = async (): Promise<void> => {
  if (useBrevoApi) {
    try {
      const res = await fetch(`${BREVO_API}/account`, {
        headers: { 'api-key': brevoKey!, accept: 'application/json' },
        signal: AbortSignal.timeout(8_000),
      });
      if (res.ok) console.log('📧 Brevo API ready (HTTPS)');
      else console.error(`❌ Brevo API key rejected (HTTP ${res.status}). Check BREVO_API_KEY and Brevo "Authorised IPs".`);
    } catch (err) {
      console.error('❌ Brevo API unreachable:', (err as Error).message);
    }
    return;
  }
  if (!transporter) {
    console.log('📧 Mail not configured: emails will be printed to the console');
    return;
  }
  try {
    await transporter.verify();
    console.log(`📧 SMTP ready (${env.SMTP_HOST}:${env.SMTP_PORT})`);
  } catch (err) {
    const e = err as Error & { responseCode?: number };
    console.error('❌ SMTP connection failed:', e.message);
    const hint = smtpHint(e);
    if (hint) console.error(hint);
  }
};

/** Throws when the email could not be sent, so callers decide whether that matters (OTP: yes, reset: no). */
export const sendMail = async (input: MailInput): Promise<void> => {
  if (useBrevoApi) return sendViaBrevoApi(input);

  if (!transporter) {
    if (isProd) throw new Error('Mail is not configured (set BREVO_API_KEY, or SMTP_HOST, SMTP_USER and SMTP_PASS)');
    console.log(`\n📧 [mail disabled] To: ${input.to}\n   Subject: ${input.subject}\n   ${input.devPreview ?? ''}\n`);
    return;
  }
  await transporter.sendMail({ from: env.MAIL_FROM, to: input.to, subject: input.subject, html: input.html, text: input.text });
};