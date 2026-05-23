const MOCK_OTP_STORAGE_KEY = 'sehat_mock_otp_phone';
export const MOCK_OTP_CODE = '12345';

export function isAuthMockEnabled() {
  const flag = import.meta.env.VITE_AUTH_MOCK;
  if (flag === 'false') return false;
  if (flag === 'true') return true;
  return import.meta.env.DEV;
}

function delay(ms = 600) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function buildMockSession({ phone, email, firstName, lastName }) {
  const resolvedEmail = email || `${phone?.replace(/\D/g, '') || 'demo'}@mock.sehat-connect.local`;

  return {
    token: `mock-token-${Date.now()}`,
    user: {
      id: `mock-${Date.now()}`,
      firstName: firstName || 'Demo',
      lastName: lastName || 'User',
      email: resolvedEmail,
      phone: phone || null,
      role: 'patient',
    },
  };
}

export async function mockSendPhoneOtp(phone) {
  await delay(400);
  sessionStorage.setItem(MOCK_OTP_STORAGE_KEY, phone);
  return { success: true, message: 'Mock OTP sent', mock: true };
}

export async function mockVerifyPhoneOtp(phone, otp) {
  await delay(500);

  const storedPhone = sessionStorage.getItem(MOCK_OTP_STORAGE_KEY);
  if (storedPhone && storedPhone !== phone) {
    throw new Error('Phone number changed. Request a new code.');
  }

  if (otp !== MOCK_OTP_CODE) {
    const error = new Error('Invalid or expired code. Please try again.');
    error.mock = true;
    throw error;
  }

  sessionStorage.removeItem(MOCK_OTP_STORAGE_KEY);
  return buildMockSession({ phone });
}

export async function mockLoginWithGoogle(credential) {
  await delay(500);

  if (credential) {
    try {
      const payload = decodeGoogleJwt(credential);
      return buildMockSession({
        email: payload.email,
        firstName: payload.given_name || payload.name?.split(' ')[0],
        lastName: payload.family_name || payload.name?.split(' ').slice(1).join(' '),
      });
    } catch {
      // fall through to generic demo user
    }
  }

  return buildMockSession({
    email: 'demo.google@mock.sehat-connect.local',
    firstName: 'Google',
    lastName: 'Demo',
  });
}

function decodeGoogleJwt(credential) {
  const base64 = credential.split('.')[1];
  const json = atob(base64.replace(/-/g, '+').replace(/_/g, '/'));
  return JSON.parse(json);
}

export function isMockToken(token) {
  return typeof token === 'string' && token.startsWith('mock-token-');
}
