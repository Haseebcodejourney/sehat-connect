import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthOtpStep from '../../features/auth/components/AuthOtpStep';
import { useAuth } from '../../features/auth/authContext';
import { clearPendingContact, getPendingContact } from '../../features/auth/authPendingContact';

export default function VerifyOtp() {
  const navigate = useNavigate();
  const { sendOtp, verifyOtp, loading, error, clearError } = useAuth();
  const contact = getPendingContact();

  useEffect(() => {
    if (!contact?.value) {
      navigate('/login', { replace: true });
    }
  }, [contact, navigate]);

  if (!contact?.value) {
    return null;
  }

  const handleVerify = async (otp) => {
    clearError();
    const payload =
      contact.method === 'email'
        ? { email: contact.value, otp }
        : { phone: contact.value, otp };

    try {
      const response = await verifyOtp(payload);
      clearPendingContact();
      const role = response.user?.role || 'patient';
      navigate(`/${role}`, { replace: true });
    } catch {
      // error shown via auth context
    }
  };

  const handleResend = async () => {
    clearError();
    const payload =
      contact.method === 'email' ? { email: contact.value } : { phone: contact.value };
    await sendOtp(payload);
  };

  return (
    <div className="verify-otp-page">
      <AuthOtpStep
        destination={contact.value}
        destinationType={contact.method}
        onSignUp={() => {
          clearError();
          navigate('/signup');
        }}
        onResend={handleResend}
        onVerify={handleVerify}
        loading={loading}
        error={error}
      />
    </div>
  );
}
