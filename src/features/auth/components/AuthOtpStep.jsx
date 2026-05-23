import { useEffect, useRef, useState } from 'react';
import {
  AUTH_OTP_SUPPORT_IMAGE,
  AUTH_OTP_VERIFY_IMAGE,
  AUTH_SUPPORT_PHONE,
  AUTH_SUPPORT_PHONE_TEL,
  formatOtpDestination,
} from '../authOtpAssets';

const OTP_LENGTH = 5;
const RESEND_SECONDS = 60;

export default function AuthOtpStep({
  destination,
  destinationType = 'phone',
  onResend,
  onVerify,
  onSignUp,
  loading,
  error,
}) {
  const [digits, setDigits] = useState(Array(OTP_LENGTH).fill(''));
  const [countdown, setCountdown] = useState(RESEND_SECONDS);
  const inputRefs = useRef([]);
  const submittedOtpRef = useRef('');
  const otpValue = digits.join('');
  const destinationLabel = formatOtpDestination(destination, destinationType);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (error) {
      submittedOtpRef.current = '';
    }
  }, [error]);

  useEffect(() => {
    if (countdown <= 0) return undefined;

    const timer = window.setInterval(() => {
      setCountdown((current) => current - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    if (otpValue.length < OTP_LENGTH) {
      submittedOtpRef.current = '';
    }
  }, [otpValue]);

  useEffect(() => {
    if (otpValue.length !== OTP_LENGTH || loading) return;
    if (submittedOtpRef.current === otpValue) return;

    submittedOtpRef.current = otpValue;
    onVerify(otpValue);
  }, [otpValue, loading, onVerify]);

  const updateDigit = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);

    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (event) => {
    event.preventDefault();
    const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
    if (!pasted) return;

    const next = Array(OTP_LENGTH).fill('');
    pasted.split('').forEach((char, i) => {
      next[i] = char;
    });
    setDigits(next);
    const focusIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleResendClick = async () => {
    if (countdown > 0 || loading) return;

    setDigits(Array(OTP_LENGTH).fill(''));
    submittedOtpRef.current = '';
    inputRefs.current[0]?.focus();
    setCountdown(RESEND_SECONDS);
    await onResend();
  };

  return (
    <div className="verify-otp-page__flow">
      <section className="verify-otp-page__verify-panel">
        <div className="verify-otp-page__verify-content">
          <h1 className="verify-otp-page__verify-title">Verification Code</h1>
          <p className="verify-otp-page__verify-subtitle">
            Enter the 5-digit OTP sent to {destinationLabel}
          </p>

          {error && <p className="verify-otp-page__error">{error}</p>}

          <div className="verify-otp-page__otp-inputs" onPaste={handlePaste}>
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={1}
                className="verify-otp-page__otp-input"
                value={digit}
                disabled={loading}
                aria-label={`Digit ${index + 1} of ${OTP_LENGTH}`}
                onChange={(e) => updateDigit(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>

          <div className="verify-otp-page__resend-row">
            <p className="verify-otp-page__resend-text">
              Didn&apos;t receive an OTP?{' '}
              <button
                type="button"
                className="verify-otp-page__resend-link"
                disabled={countdown > 0 || loading}
                onClick={handleResendClick}
              >
                Resend
              </button>
            </p>
            {countdown > 0 && <span className="verify-otp-page__resend-timer">{countdown}</span>}
          </div>

          <p className="verify-otp-page__signup-prompt">
            Don&apos;t have an account yet?{' '}
            <button type="button" className="verify-otp-page__signup-link" onClick={onSignUp}>
              Sign up
            </button>
          </p>
        </div>

        <div className="verify-otp-page__verify-visual" aria-hidden="true">
          <img
            src={AUTH_OTP_VERIFY_IMAGE}
            alt=""
            className="verify-otp-page__verify-image"
            onError={(e) => {
              e.currentTarget.classList.add('verify-otp-page__verify-image--hidden');
            }}
          />
        </div>
      </section>

      <section className="verify-otp-page__help-panel">
        <div className="verify-otp-page__help-visual" aria-hidden="true">
          <img
            src={AUTH_OTP_SUPPORT_IMAGE}
            alt=""
            className="verify-otp-page__help-image"
            onError={(e) => {
              e.currentTarget.classList.add('verify-otp-page__help-image--hidden');
            }}
          />
        </div>
        <div className="verify-otp-page__help-content">
          <h2 className="verify-otp-page__help-title">Need Help?</h2>
          <p className="verify-otp-page__help-text">
            If you face any issue, feel free to contact us. We provide 24/7 support to assist to
            problems
          </p>
          <a href={`tel:${AUTH_SUPPORT_PHONE_TEL}`} className="verify-otp-page__help-call">
            Call {AUTH_SUPPORT_PHONE}
          </a>
        </div>
      </section>
    </div>
  );
}
