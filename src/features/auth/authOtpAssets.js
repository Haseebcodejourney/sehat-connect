/**
 * Static assets and helpers for the OTP verification flow.
 * All images are served from /public (no external CDN).
 */

/** Illustration on the verify-OTP panel (SVG — not converted to WebP). */
export const AUTH_OTP_VERIFY_IMAGE = '/assets/b2c_design/signup-card/signup-card.svg';

/** “Need help?” sidebar illustration */
export const AUTH_OTP_SUPPORT_IMAGE = '/assets/B2c/careers/need-help-two.webp';

/** Display phone number and tel: href for support call link */
export const AUTH_SUPPORT_PHONE = '0311 1155955';
export const AUTH_SUPPORT_PHONE_TEL = '+923111155955';

/**
 * Normalizes phone/email shown on the OTP screen.
 * @param {string} destination - Raw phone or email from auth flow
 * @param {'phone'|'email'} type
 */
export function formatOtpDestination(destination, type = 'phone') {
  if (!destination) return '';
  if (type === 'email') return destination.trim();
  return destination.replace(/\s/g, '');
}
