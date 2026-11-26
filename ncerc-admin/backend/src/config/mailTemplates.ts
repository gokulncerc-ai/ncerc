import { env } from './env';

const BRAND = 'NCERC Admin';

const escapeHtml = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

/** 120 -> "2 minutes", 90 -> "90 seconds" */
export const formatDuration = (seconds: number): string => {
  if (seconds % 60 === 0) {
    const m = seconds / 60;
    return `${m} minute${m === 1 ? '' : 's'}`;
  }
  return `${seconds} seconds`;
};

export interface EmailContent {
  subject: string;
  html: string;
  text: string;
}

/* ---------- shared layout (table based + inline CSS = works in Gmail, Outlook, mobile) ---------- */
const layout = (opts: { preheader: string; heading: string; content: string }): string => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="light only">
  <title>${escapeHtml(opts.heading)}</title>
</head>
<body style="margin:0;padding:0;background-color:#eef2f7;-webkit-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#eef2f7;">${escapeHtml(opts.preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eef2f7;">
    <tr><td align="center" style="padding:32px 12px;">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0"
             style="width:100%;max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,0.10);">

        <!-- header -->
        <tr><td align="center" bgcolor="#1e3a8a"
                style="padding:32px 24px;background-color:#1e3a8a;background-image:linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%);">
          <div style="display:inline-block;padding:6px 16px;border-radius:999px;background-color:rgba(255,255,255,0.16);
                      font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;color:#ffffff;">
            NCERC
          </div>
          <div style="margin-top:14px;font-family:Arial,Helvetica,sans-serif;font-size:24px;font-weight:700;color:#ffffff;">
            ${escapeHtml(opts.heading)}
          </div>
        </td></tr>

        <!-- body -->
        <tr><td style="padding:32px 32px 8px 32px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:24px;color:#334155;">
          ${opts.content}
        </td></tr>

        <!-- footer -->
        <tr><td style="padding:24px 32px 32px 32px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:18px;color:#94a3b8;
                       border-top:1px solid #e2e8f0;">
          <div style="margin-top:8px;">This is an automated message from ${BRAND}. Please do not reply to this email.</div>
          <div style="margin-top:4px;">&copy; ${new Date().getFullYear()} NCERC. All rights reserved.</div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

const button = (href: string, label: string): string => `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:24px auto;">
    <tr><td align="center" bgcolor="#2563eb" style="border-radius:10px;background-color:#2563eb;">
      <a href="${escapeHtml(href)}" target="_blank"
         style="display:inline-block;padding:14px 32px;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;
                color:#ffffff;text-decoration:none;border-radius:10px;">${escapeHtml(label)}</a>
    </td></tr>
  </table>`;

/* ---------- OTP ---------- */
export const otpEmail = (name: string, code: string, purpose: 'signup' | 'super_admin' | 'password_reset' = 'signup'): EmailContent => {
  const expires = formatDuration(env.OTP_TTL_SECONDS);
  const intro =
    purpose === 'super_admin'
      ? `A super admin is creating a <strong>Super Admin</strong> account for you on ${BRAND}. Super admins can manage every admin, news item and event. Use this code to verify your email address and activate the account:`
      : purpose === 'password_reset'
        ? `We received a request to reset the password of your ${BRAND} account. Enter this code to continue. If it was not you, your password stays unchanged:`
        : `Use this code to verify your email address and finish creating your ${BRAND} account:`;

  const digits = code
    .split('')
    .map(
      (d) =>
        `<span style="display:inline-block;width:42px;height:54px;margin:0 3px 6px 3px;border:1px solid #c7d2fe;border-radius:10px;
                      background-color:#eef2ff;font-family:'Courier New',Courier,monospace;font-size:28px;font-weight:700;
                      line-height:54px;text-align:center;color:#1e3a8a;">${d}</span>`,
    )
    .join('');

  const content = `
    <p style="margin:0 0 12px 0;">Hi <strong>${escapeHtml(name)}</strong>,</p>
    <p style="margin:0 0 20px 0;">${intro}</p>

    <div style="text-align:center;margin:8px 0 12px 0;">${digits}</div>

    <div style="text-align:center;margin:0 0 24px 0;">
      <span style="display:inline-block;padding:6px 14px;border-radius:999px;background-color:#fef3c7;
                   font-size:13px;font-weight:700;color:#92400e;">
        &#9201; Expires in ${expires}
      </span>
    </div>

    <div style="padding:14px 16px;border-radius:10px;background-color:#f1f5f9;font-size:13px;line-height:20px;color:#475569;">
      <strong>Keep this code private.</strong> NCERC staff will never ask you for it.
      If you were not expecting this, you can safely ignore this email.
    </div>
    <div style="height:16px;"></div>`;

  return {
    subject: purpose === 'password_reset' ? `${code} is your NCERC Admin password reset code` : `${code} is your NCERC Admin verification code`,
    html: layout({ preheader: `Your verification code is ${code}. It expires in ${expires}.`, heading: purpose === 'password_reset' ? 'Reset your password' : 'Verify your email', content }),
    text: `Hi ${name},\n\nYour NCERC Admin verification code is: ${code}\nIt expires in ${expires}.\n\nNever share this code. If you did not request it, ignore this email.`,
  };
};

/* ---------- password reset ---------- */
export const passwordResetEmail = (name: string, link: string): EmailContent => {
  const content = `
    <p style="margin:0 0 12px 0;">Hi <strong>${escapeHtml(name)}</strong>,</p>
    <p style="margin:0 0 8px 0;">We received a request to reset your ${BRAND} password. Click the button below to choose a new one.
       The link is valid for <strong>30 minutes</strong>.</p>
    ${button(link, 'Reset password')}
    <p style="margin:0 0 6px 0;font-size:13px;color:#64748b;">Button not working? Copy this link into your browser:</p>
    <p style="margin:0 0 20px 0;font-size:12px;word-break:break-all;"><a href="${escapeHtml(link)}" style="color:#2563eb;">${escapeHtml(link)}</a></p>
    <div style="padding:14px 16px;border-radius:10px;background-color:#f1f5f9;font-size:13px;line-height:20px;color:#475569;">
      If you did not request a password reset, you can safely ignore this email. Your password will not change.
    </div>
    <div style="height:16px;"></div>`;

  return {
    subject: 'Reset your NCERC Admin password',
    html: layout({ preheader: 'Use this link to reset your password. It expires in 30 minutes.', heading: 'Reset your password', content }),
    text: `Hi ${name},\n\nReset your NCERC Admin password (valid for 30 minutes):\n${link}\n\nIf you did not request this, ignore this email.`,
  };
};

/* ---------- account created by the super admin ---------- */
export const welcomeEmail = (name: string, loginUrl: string, roleLabel: 'admin' | 'super admin' = 'admin'): EmailContent => {
  const article = roleLabel === 'admin' ? 'an' : 'a';
  const content = `
    <p style="margin:0 0 12px 0;">Hi <strong>${escapeHtml(name)}</strong>,</p>
    <p style="margin:0 0 8px 0;">A super admin has created ${article} <strong>${roleLabel}</strong> account for you on ${BRAND}. You can now manage news and events for the NCERC website.</p>
    ${button(loginUrl, 'Go to admin login')}
    <p style="margin:0 0 20px 0;font-size:13px;color:#64748b;">
      Your super admin will share your temporary password. You can also use <em>Forgot password</em> on the login page to set your own.
    </p>
    <div style="height:8px;"></div>`;

  return {
    subject: 'Your NCERC Admin account is ready',
    html: layout({ preheader: 'Your NCERC Admin account has been created.', heading: 'Welcome aboard', content }),
    text: `Hi ${name},\n\nA super admin created ${article} ${roleLabel} NCERC Admin account for you.\nLog in: ${loginUrl}\nYour super admin will share your temporary password, or use "Forgot password" on the login page.`,
  };
};

/* ---------- a super admin changed this person's password ---------- */
export const passwordChangedByAdminEmail = (name: string, changedBy: string, loginUrl: string): EmailContent => {
  const content = `
    <p style="margin:0 0 12px 0;">Hi <strong>${escapeHtml(name)}</strong>,</p>
    <p style="margin:0 0 8px 0;">The password of your ${BRAND} account was just changed by a super admin
       (<strong>${escapeHtml(changedBy)}</strong>). You were signed out on all devices.</p>
    ${button(loginUrl, 'Go to admin login')}
    <div style="padding:14px 16px;border-radius:10px;background-color:#f1f5f9;font-size:13px;line-height:20px;color:#475569;">
      Log in with the new password you were given, or choose your own with <em>Forgot password</em> on the login page.
      If you did not expect this change, contact your super admin.
    </div>
    <div style="height:16px;"></div>`;

  return {
    subject: 'Your NCERC Admin password was changed',
    html: layout({ preheader: 'A super admin changed your password.', heading: 'Password changed', content }),
    text: `Hi ${name},\n\nA super admin (${changedBy}) changed the password of your NCERC Admin account. You were signed out on all devices.\nLog in: ${loginUrl}\nIf you did not expect this, contact your super admin.`,
  };
};

/* ---------- the owner reset or changed their own password ---------- */
export const passwordChangedNoticeEmail = (name: string, loginUrl: string, via: 'reset' | 'change'): EmailContent => {
  const how = via === 'reset' ? 'reset using the email verification code' : 'changed from the admin panel';
  const content = `
    <p style="margin:0 0 12px 0;">Hi <strong>${escapeHtml(name)}</strong>,</p>
    <p style="margin:0 0 8px 0;">The password of your ${BRAND} account was just ${how}. You were signed out on all devices.</p>
    ${button(loginUrl, 'Go to admin login')}
    <div style="padding:14px 16px;border-radius:10px;background-color:#f1f5f9;font-size:13px;line-height:20px;color:#475569;">
      <strong>Was this not you?</strong> Reset your password again straight away from the login page using
      <em>Forgot password</em> and tell another super admin.
    </div>
    <div style="height:16px;"></div>`;

  return {
    subject: 'Your NCERC Admin password was changed',
    html: layout({ preheader: 'Your password was changed.', heading: 'Password changed', content }),
    text: `Hi ${name},\n\nThe password of your NCERC Admin account was just ${how}. You were signed out on all devices.\nLog in: ${loginUrl}\nIf this was not you, reset your password again from the login page and tell another super admin.`,
  };
};