// Validation utilities

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password) => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^[+]?[\d\s\-()]{10,}$/;
  return phoneRegex.test(phone);
};

export const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

export const isValidDateRange = (startDate, endDate) => {
  return new Date(startDate) <= new Date(endDate);
};

export default {
  isValidEmail,
  isValidPassword,
  isValidPhoneNumber,
  isValidURL,
  isEmptyObject,
  isValidDateRange,
};
