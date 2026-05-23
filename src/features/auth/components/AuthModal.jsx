import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { GoogleLogin } from '@react-oauth/google';
import 'react-phone-number-input/style.css';
import { useAuth } from '../authContext';
import { setPendingContact } from '../authPendingContact';
import { isAuthMockEnabled } from '../authMock';
import AuthModalSlider from './AuthModalSlider';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const authMockActive = isAuthMockEnabled();

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.203 36 24 36c-5.514 0-10-4.486-10-10s4.486-10 10-10c2.494 0 4.785.92 6.523 2.437l6.062-6.062C33.25 9.256 28.806 7 24 7 13.523 7 5 15.523 5 26s8.523 19 19 19 19-8.523 19-19c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 16.108 18.961 13 24 13c2.494 0 4.785.92 6.523 2.437l6.062-6.062C33.25 9.256 28.806 7 24 7 16.318 7 9.656 11.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 45c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 45 24 45z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 45 30.638 45 26c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export default function AuthModal() {
  const navigate = useNavigate();
  const { authModalOpen, closeAuthModal, sendOtp, loginWithGoogle, loading, error, clearError } = useAuth();

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('phone');
  const [localError, setLocalError] = useState('');

  const resetForm = useCallback(() => {
    setPhone('');
    setEmail('');
    setStep('phone');
    setLocalError('');
    clearError();
  }, [clearError]);

  useEffect(() => {
    if (!authModalOpen) {
      resetForm();
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeAuthModal();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [authModalOpen, closeAuthModal, resetForm]);

  const handleClose = () => {
    closeAuthModal();
    resetForm();
  };

  const goToVerifyOtpPage = async (payload, method, value) => {
    await sendOtp(payload);
    setPendingContact({ method, value });
    handleClose();
    navigate('/verify-otp');
  };

  const handlePhoneContinue = async (event) => {
    event.preventDefault();
    setLocalError('');
    clearError();

    if (!phone || !isValidPhoneNumber(phone)) {
      setLocalError('Please enter a valid phone number');
      return;
    }

    try {
      await goToVerifyOtpPage({ phone }, 'phone', phone);
    } catch {
      // error from auth context
    }
  };

  const handleEmailContinue = async (event) => {
    event.preventDefault();
    setLocalError('');
    clearError();

    if (!email || !EMAIL_PATTERN.test(email.trim())) {
      setLocalError('Please enter a valid email address');
      return;
    }

    try {
      const trimmedEmail = email.trim();
      await goToVerifyOtpPage({ email: trimmedEmail }, 'email', trimmedEmail);
    } catch {
      // error from auth context
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setLocalError('');
    clearError();

    try {
      const response = await loginWithGoogle(credentialResponse.credential);
      const role = response.user?.role || 'patient';
      handleClose();
      navigate(`/${role}`);
    } catch {
      // error from auth context
    }
  };

  const handleMockGoogleSignIn = async () => {
    setLocalError('');
    clearError();

    try {
      const response = await loginWithGoogle(null);
      const role = response.user?.role || 'patient';
      handleClose();
      navigate(`/${role}`);
    } catch {
      // error from auth context
    }
  };

  const displayError = localError || error;

  if (!authModalOpen) {
    return null;
  }

  return createPortal(
    <div className="auth-modal-overlay" onClick={handleClose} role="presentation">
      <div
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="close-btn" onClick={handleClose} aria-label="Close">
          ×
        </button>

        <AuthModalSlider />

        <div className="auth-modal__form-section">
          {step === 'phone' ? (
            <form onSubmit={handlePhoneContinue} className="auth-modal__form">
              {displayError && <p className="auth-modal__error">{displayError}</p>}

              <div className="auth-modal__phone-wrapper">
                <PhoneInput
                  international
                  defaultCountry="PK"
                  countryCallingCodeEditable={false}
                  value={phone}
                  onChange={setPhone}
                  placeholder="331 0280281"
                  className="auth-modal__phone-input"
                  numberInputProps={{
                    className: 'auth-modal__phone-number',
                    'aria-label': 'Phone number',
                  }}
                />
              </div>

              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? 'Please wait...' : 'Continue with Mobile Number'}
              </Button>

              <button
                type="button"
                className="auth-modal__switch-method"
                onClick={() => {
                  setStep('email');
                  setLocalError('');
                  clearError();
                }}
              >
                Continue with email instead
              </button>
            </form>
          ) : (
            <form onSubmit={handleEmailContinue} className="auth-modal__form">
              {displayError && <p className="auth-modal__error">{displayError}</p>}

              <Input
                type="email"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? 'Please wait...' : 'Continue with Email'}
              </Button>

              <button
                type="button"
                className="auth-modal__switch-method"
                onClick={() => {
                  setStep('phone');
                  setLocalError('');
                  clearError();
                }}
              >
                Continue with mobile number instead
              </button>
            </form>
          )}

          <div className="auth-modal__divider">
            <span>or</span>
          </div>

          {GOOGLE_CLIENT_ID && !authMockActive ? (
            <div className="auth-modal__google">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={() => setLocalError('Google sign-in was cancelled or failed')}
                useOneTap={false}
                theme="outline"
                size="large"
                text="continue_with"
                shape="rectangular"
                width="100%"
              />
            </div>
          ) : (
            <button
              type="button"
              className="auth-modal__google-btn"
              onClick={
                authMockActive
                  ? handleMockGoogleSignIn
                  : () =>
                      setLocalError(
                        'Google sign-in is not configured. Add VITE_GOOGLE_CLIENT_ID to your .env file.'
                      )
              }
              disabled={loading}
            >
              <GoogleIcon />
              <span>{loading ? 'Signing in...' : 'Continue with Google'}</span>
            </button>
          )}

          <p className="auth-modal__legal" id="auth-modal-title">
            By signing in, I agree to Sehat Connect&apos;s{' '}
            <Link to="/terms" onClick={handleClose}>
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link to="/privacy-policy" onClick={handleClose}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
