import { useEffect, useState } from 'react';

const KEY = 'mm-design-theme';
const EVENT = 'mm-theme-change';
const valid = (value) => value === 'light' || value === 'dark';

function readTheme() {
  try {
    const saved = localStorage.getItem(KEY);
    if (valid(saved)) return saved;
  } catch { /* Theme remains usable when storage is unavailable. */ }
  const active = document.documentElement.dataset.theme;
  if (valid(active)) return active;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export default function useSiteTheme() {
  const [theme, setTheme] = useState(readTheme);
  useEffect(() => {
    const sync = (event) => { if (valid(event.detail)) setTheme(event.detail); };
    const storage = (event) => {
      if (event.key !== KEY || !valid(event.newValue)) return;
      document.documentElement.dataset.theme = event.newValue;
      document.documentElement.style.colorScheme = event.newValue;
      setTheme(event.newValue);
    };
    window.addEventListener(EVENT, sync);
    window.addEventListener('storage', storage);
    document.documentElement.dataset.theme = readTheme();
    document.documentElement.style.colorScheme = readTheme();
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener('storage', storage);
    };
  }, []);

  const toggleTheme = () => {
    const next = readTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.documentElement.style.colorScheme = next;
    try { localStorage.setItem(KEY, next); } catch { /* optional persistence */ }
    setTheme(next);
    window.dispatchEvent(new CustomEvent(EVENT, { detail: next }));
  };
  return [theme, toggleTheme];
}
