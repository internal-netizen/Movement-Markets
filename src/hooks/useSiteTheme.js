import { useEffect, useSyncExternalStore } from 'react';

const KEY = 'mm-design-theme';
const EVENT = 'mm-theme-change';
const valid = (value) => value === 'light' || value === 'dark';

function readTheme() {
  if (typeof window === 'undefined') return 'dark';
  try {
    const saved = localStorage.getItem(KEY);
    if (valid(saved)) return saved;
  } catch { /* Theme remains usable when storage is unavailable. */ }
  const active = document.documentElement.dataset.theme;
  if (valid(active)) return active;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function subscribe(onChange) {
  const sync = (event) => { if (valid(event.detail)) onChange(); };
  const storage = (event) => { if (event.key === KEY) onChange(); };
  window.addEventListener(EVENT, sync);
  window.addEventListener('storage', storage);
  return () => {
    window.removeEventListener(EVENT, sync);
    window.removeEventListener('storage', storage);
  };
}

export default function useSiteTheme() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => 'dark');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    try { localStorage.setItem(KEY, next); } catch { /* optional persistence */ }
    window.dispatchEvent(new CustomEvent(EVENT, { detail: next }));
  };
  return [theme, toggleTheme];
}
