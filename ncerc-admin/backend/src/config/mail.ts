import nodemailer from 'nodemailer';
import { env, isProd } from './env';

export { otpEmail, passwordResetEmail, welcomeEmail } from './mailTemplates';

const smtpUser = env.SMTP_USER?.trim();
const smtpPass = env.SMTP_PASS?.trim();
const smtpConfigured = Boolean(env.SMTP_HOST && smtpUser && smtpPass);
const secure = env.SMTP_PORT === 465;

// NOTE: the transport is created only when SMTP IS configured
const transporter = smtpConfigured
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

export const isMailConfigured = transporter !== null;

const smtpHint = (err: Error & { responseCode?: number }): string => {
  if (err.responseCode !== 535) return '';
  return [
    'Brevo rejected the SMTP login. Check:',
    `  - SMTP_USER is the login shown on Brevo "SMTP & API > SMTP" (currently: ${smtpUser})`,
    `  - SMTP_PASS is an SMTP key ("xsmtpsib-..."), currently starts with "${smtpPass?.slice(0, 9)}" (length ${smtpPass?.length})`,
    '  - quote the value in .env if it contains "#", and restart the server after editing .env',
  ].join('\n');
};

/** Call once at startup so wrong credentials show up immediately, not on the first email. */
export const verifyMail = async (): Promise<void> => {
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

interface MailInput {
  to: string;
  subject: string;
  html: string;
  /** plain-text alternative (better deliverability, and used by clients that block HTML) */
  text?: string;
  /** printed to the console when mail is not configured (development only) */
  devPreview?: string;
}

/** Throws when the email could not be sent, so callers decide whether that matters (OTP: yes, reset: no). */
export const sendMail = async ({ to, subject, html, text, devPreview }: MailInput): Promise<void> => {
  if (!transporter) {
    if (isProd) throw new Error('Mail is not configured (set SMTP_HOST, SMTP_USER and SMTP_PASS)');
    console.log(`\n📧 [mail disabled] To: ${to}\n   Subject: ${subject}\n   ${devPreview ?? ''}\n`);
    return;
  }
  await transporter.sendMail({ from: env.MAIL_FROM, to, subject, html, text });
};
