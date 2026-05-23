const PENDING_CONTACT_KEY = 'sehat_pending_auth_contact';

export function setPendingContact({ method, value }) {
  sessionStorage.setItem(PENDING_CONTACT_KEY, JSON.stringify({ method, value }));
}

export function getPendingContact() {
  const raw = sessionStorage.getItem(PENDING_CONTACT_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearPendingContact() {
  sessionStorage.removeItem(PENDING_CONTACT_KEY);
}
