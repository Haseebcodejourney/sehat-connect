export const AUTH_USER_STORAGE_KEY = 'authUser';

export function readStoredUser() {
  try {
    const raw = localStorage.getItem(AUTH_USER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
