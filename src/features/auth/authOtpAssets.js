// Healthwire-style OTP screen images (update paths if CDN URLs change)
export const AUTH_OTP_VERIFY_IMAGE =
  'https://healthwire.pk/assets/b2c_design/signup-card/signup-card.svg';

export const AUTH_OTP_SUPPORT_IMAGE =
  'https://healthwire.pk/assets/B2c/careers/need-help-two.webp';

export const AUTH_SUPPORT_PHONE = '0311 1155955';
export const AUTH_SUPPORT_PHONE_TEL = '+923111155955';

export function formatOtpDestination(destination, type = 'phone') {
  if (!destination) return '';
  if (type === 'email') return destination.trim();
  return destination.replace(/\s/g, '');
}
