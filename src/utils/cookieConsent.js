/**
 * Movement Markets Consent Management Platform (CMP) Engine
 * 
 * Provides production-grade consent storage, cookie purging, 
 * Google Consent Mode v2 synchronization, and query helpers.
 */

export const STORAGE_KEY = 'mm_cookie_consent';
export const COOKIE_NAME = 'mm_cookie_consent';

/**
 * Known non-essential cookie prefix patterns that should be purged
 * when a user denies or withdraws consent for statistics/marketing.
 */
const NON_ESSENTIAL_COOKIE_PATTERNS = [
  /^_ga/,
  /^_gid/,
  /^_gat/,
  /^_gcl/,
  /^_fbp/,
  /^_fbc/,
  /^_pk_/,
  /^amp_/,
  /^_cl/,
  /^hubspot/,
  /^__hstc/,
  /^intercom/,
];

/**
 * Retrieve current stored consent object or null if not yet consented.
 */
export function getStoredConsent() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // fallback to document.cookie
  }

  try {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + COOKIE_NAME + ')=([^;]*)'));
    if (match && match[3]) {
      return JSON.parse(decodeURIComponent(match[3]));
    }
  } catch {
    // ignore
  }

  return null;
}

/**
 * Check if the user has given consent for a specific category.
 * @param {'necessary' | 'preferences' | 'statistics' | 'marketing'} category 
 * @returns {boolean}
 */
export function hasConsent(category) {
  if (category === 'necessary') return true;
  const consent = getStoredConsent();
  if (!consent) return false;
  return Boolean(consent[category]);
}

/**
 * Save consent payload to localStorage and 1st-party cookie.
 */
export function persistConsent(payload) {
  if (typeof window === 'undefined') return;

  const data = {
    ...payload,
    necessary: true,
    timestamp: payload.timestamp || new Date().toISOString(),
    consentId: payload.consentId || ('mm-cb-' + Math.random().toString(36).substring(2, 12)),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }

  try {
    // Store 1st-party cookie valid for 1 year
    const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(data))}; expires=${expires}; path=/; SameSite=Lax`;
  } catch {
    // ignore
  }

  // Purge cookies if analytics or marketing is disabled
  if (!data.statistics || !data.marketing) {
    purgeNonEssentialCookies(!data.statistics, !data.marketing);
  }

  // Sync with Google Consent Mode v2 & dataLayer
  syncGoogleConsentMode(data);

  // Update window.Cookiebot mock API
  if (window.Cookiebot) {
    window.Cookiebot.consent = data;
    window.Cookiebot.consented = true;
  }

  // Broadcast consent change event
  window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: data }));
  return data;
}

/**
 * Wipe consent record (withdrawal of consent).
 */
export function clearConsent() {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }

  try {
    document.cookie = `${COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  } catch {
    // ignore
  }

  // Purge all non-essential cookies
  purgeNonEssentialCookies(true, true);

  const deniedPayload = {
    necessary: true,
    preferences: false,
    statistics: false,
    marketing: false,
    timestamp: new Date().toISOString(),
    consentId: 'mm-withdrawn',
  };

  syncGoogleConsentMode(deniedPayload);

  if (window.Cookiebot) {
    window.Cookiebot.consent = deniedPayload;
    window.Cookiebot.consented = false;
  }

  window.dispatchEvent(new CustomEvent('cookie-consent-updated', { detail: deniedPayload }));
  return deniedPayload;
}

/**
 * Clean unwanted cookies from document.cookie when user denies or withdraws consent.
 */
export function purgeNonEssentialCookies(purgeStats = true, purgeMarketing = true) {
  if (typeof document === 'undefined') return;

  try {
    const cookies = document.cookie.split(';');
    const hostname = window.location.hostname;
    const domainParts = hostname.split('.');

    cookies.forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      const isTarget = NON_ESSENTIAL_COOKIE_PATTERNS.some(p => p.test(name));

      if (isTarget && (purgeStats || purgeMarketing)) {
        // Clear on current path and domain variants
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
        if (domainParts.length > 1) {
          const rootDomain = '.' + domainParts.slice(-2).join('.');
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
        }
      }
    });
  } catch {
    // ignore
  }
}

/**
 * Synchronize consent status with Google Consent Mode v2 and GTM dataLayer.
 */
export function syncGoogleConsentMode(consent, isDefault = false) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }

  const mode = isDefault ? 'default' : 'update';
  const consentState = {
    analytics_storage: consent?.statistics ? 'granted' : 'denied',
    ad_storage: consent?.marketing ? 'granted' : 'denied',
    ad_user_data: consent?.marketing ? 'granted' : 'denied',
    ad_personalization: consent?.marketing ? 'granted' : 'denied',
    functionality_storage: consent?.preferences ? 'granted' : 'denied',
    personalization_storage: consent?.preferences ? 'granted' : 'denied',
    security_storage: 'granted',
  };

  gtag('consent', mode, consentState);

  window.dataLayer.push({
    event: isDefault ? 'cookie_consent_default' : 'cookie_consent_update',
    cookie_consent_status: consentState,
  });
}
