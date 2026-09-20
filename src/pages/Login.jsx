import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo.jsx';
import { COMPANY_DETAILS } from '../data/legalDocuments.js';
import '../styles/movement-home.css';
import '../styles/pages.css';
import '../styles/login.css';
import { CLIENT_LOGIN_URL } from '../config/portalLinks.js';

const STORE_KEY = 'mm-design-theme';

/** Jurisdictions the legal documents exclude; picking one explains why. */
const RESTRICTED = ['United States', 'Cuba', 'North Korea', 'Sudan', 'Syria', 'Iran', 'Myanmar', 'United Arab Emirates'];
const COUNTRIES = ['Australia', 'Austria', 'Belgium', 'Brazil', 'Canada', 'Chile', 'Cuba', 'Denmark', 'Finland', 'France',
  'Germany', 'Hong Kong', 'India', 'Indonesia', 'Iran', 'Ireland', 'Italy', 'Japan', 'Malaysia', 'Mexico', 'Myanmar',
  'Netherlands', 'New Zealand', 'Nigeria', 'North Korea', 'Norway', 'Philippines', 'Poland', 'Portugal', 'Singapore',
  'South Africa', 'South Korea', 'Spain', 'Sudan', 'Sweden', 'Switzerland', 'Syria', 'Thailand', 'Turkey',
  'United Arab Emirates', 'United Kingdom', 'United States', 'Vietnam', 'Other'];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function initialTheme() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    // storage unavailable — fall through to the system preference
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
  return 'dark';
}

const Icon = {
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  lock: <><rect x="3" y="10" width="18" height="12" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /><circle cx="12" cy="16" r="1" /></>,
  user: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></>,
  eyeOff: <><path d="m2 2 20 20" /><path d="M6.7 6.7C4 8.4 2 12 2 12s3.6 7 10 7a10.9 10.9 0 0 0 5.3-1.3" /><path d="M9.9 5.2A11 11 0 0 1 12 5c6.4 0 10 7 10 7a18 18 0 0 1-3.2 4" /></>,
  arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  shield: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>,
  check: <polyline points="20 6 9 17 4 12" />,
  info: <><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></>,
};

const Svg = ({ d, size = 16, className = '' }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>
);

const PANEL_POINTS = [
  'Positions, balances and history in real time',
  'Funding and withdrawals from one screen',
  'Two-factor authentication on every login',
];

export default function Login() {
  const [theme, setTheme] = useState(initialTheme);
  const [mode, setMode] = useState('login');
  const [showPw, setShowPw] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent
  const [touched, setTouched] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', country: '', password: '', remember: false, agree: false });

  useEffect(() => {
    window.location.replace(CLIENT_LOGIN_URL);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, theme);
      document.documentElement.setAttribute('data-theme', theme);
    } catch {
      // the choice just will not persist
    }
  }, [theme]);

  const isDark = theme === 'dark';
  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
    if (status === 'sent') setStatus('idle');
  };

  const errors = useMemo(() => {
    const e = {};
    if (!EMAIL_RE.test(form.email.trim())) e.email = 'Enter a valid email address.';
    if (mode === 'login') {
      if (!form.password) e.password = 'Enter your password.';
    } else {
      if (form.name.trim().length < 2) e.name = 'Enter your full name.';
      if (!form.country) e.country = 'Select your country of residence.';
      if (form.password.length < 8) e.password = 'Use at least 8 characters.';
      if (!form.agree) e.agree = 'Please accept the agreement to continue.';
    }
    return e;
  }, [form, mode]);

  const restricted = mode === 'register' && RESTRICTED.includes(form.country);
  const show = (k) => (touched && errors[k]) || null;

  function submit(event) {
    event.preventDefault();
    setTouched(true);
    if (Object.keys(errors).length || restricted) return;
    setStatus('sending');
    // No authentication backend in this project; the form reports that plainly
    // rather than pretending to sign anyone in.
    setTimeout(() => setStatus('sent'), 700);
  }

  function switchMode(next) {
    setMode(next); setTouched(false); setStatus('idle');
  }

  return (
    <div className="mm-design lg-page" data-theme={theme}>
      <header className="lg-top">
        <Link to="/" className="lg-brand" aria-label="Movement Markets home"><BrandLogo /></Link>
        <div className="lg-top-actions">
          <button
            type="button"
            className="lg-theme"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-pressed={!isDark}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          >
            <span className="lg-theme-track"><span className="lg-theme-knob" /></span>
            {isDark ? 'Dark' : 'Light'}
          </button>
          <Link to="/" className="lg-back">Back to site</Link>
        </div>
      </header>

      <main className="lg-main">
        <section className="lg-shell" aria-labelledby="lg-title">
          <aside className="lg-art">
            <img className="lg-art-img" src="/art/05_home_awareness_safeguards.jpg" alt="" decoding="async" />
            <div className="lg-art-body">
              <p className="lg-eyebrow"><i />Client portal</p>
              <h2 className="lg-art-title">Your desk,<br />wherever you are.</h2>
              <ul className="lg-points">
                {PANEL_POINTS.map((p) => (
                  <li key={p}><Svg d={Icon.check} size={14} />{p}</li>
                ))}
              </ul>
            </div>
            <div className="lg-art-foot">
              <Svg d={Icon.shield} size={15} />
              <span>Segregated client funds · Negative balance protection on eligible retail accounts</span>
            </div>
          </aside>

          <div className="lg-form-panel">
            <div className="lg-tabs" role="tablist" aria-label="Account access">
              <button type="button" role="tab" aria-selected={mode === 'login'} className={mode === 'login' ? 'is-active' : ''} onClick={() => switchMode('login')}>Log in</button>
              <button type="button" role="tab" aria-selected={mode === 'register'} className={mode === 'register' ? 'is-active' : ''} onClick={() => switchMode('register')}>Open an account</button>
            </div>

            <h1 id="lg-title" className="lg-title">
              {mode === 'login' ? 'Welcome back.' : 'Open your account.'}
            </h1>
            <p className="lg-lead">
              {mode === 'login'
                ? 'Sign in to fund, trade and manage your account.'
                : 'A few details to get started. Verification usually takes under an hour.'}
            </p>

            <form className="lg-form" onSubmit={submit} noValidate>
              {mode === 'register' && (
                <div className="lg-field">
                  <label htmlFor="lg-name">Full name</label>
                  <div className={`lg-input${show('name') ? ' is-bad' : ''}`}>
                    <Svg d={Icon.user} />
                    <input id="lg-name" name="name" autoComplete="name" placeholder="As it appears on your ID"
                           value={form.name} onChange={set('name')} />
                  </div>
                  {show('name') && <p className="lg-error">{errors.name}</p>}
                </div>
              )}

              <div className="lg-field">
                <label htmlFor="lg-email">Email</label>
                <div className={`lg-input${show('email') ? ' is-bad' : ''}`}>
                  <Svg d={Icon.mail} />
                  <input id="lg-email" name="email" type="email" autoComplete="email" placeholder="you@example.com"
                         value={form.email} onChange={set('email')} />
                </div>
                {show('email') && <p className="lg-error">{errors.email}</p>}
              </div>

              {mode === 'register' && (
                <div className="lg-field">
                  <label htmlFor="lg-country">Country of residence</label>
                  <div className={`lg-input${show('country') ? ' is-bad' : ''}`}>
                    <Svg d={Icon.globe} />
                    <select id="lg-country" name="country" value={form.country} onChange={set('country')}>
                      <option value="">Select a country</option>
                      {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  {show('country') && <p className="lg-error">{errors.country}</p>}
                </div>
              )}

              <div className="lg-field">
                <label htmlFor="lg-password">Password</label>
                <div className={`lg-input${show('password') ? ' is-bad' : ''}`}>
                  <Svg d={Icon.lock} />
                  <input id="lg-password" name="password" type={showPw ? 'text' : 'password'}
                         autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                         placeholder={mode === 'login' ? 'Your password' : 'At least 8 characters'}
                         value={form.password} onChange={set('password')} />
                  <button type="button" className="lg-peek" onClick={() => setShowPw((v) => !v)}
                          aria-label={showPw ? 'Hide password' : 'Show password'}>
                    <Svg d={showPw ? Icon.eyeOff : Icon.eye} size={17} />
                  </button>
                </div>
                {show('password') && <p className="lg-error">{errors.password}</p>}
              </div>

              {restricted && (
                <p className="lg-notice is-warn">
                  <Svg d={Icon.info} size={16} />
                  <span>{COMPANY_DETAILS.shortName} does not offer services to residents of {form.country}. See the <Link to="/legal">legal documents</Link> for the full list.</span>
                </p>
              )}

              {mode === 'register' && !restricted && form.country && (
                <p className="lg-notice">
                  <Svg d={Icon.info} size={16} />
                  <span>
                    {COMPANY_DETAILS.shortName} is registered in {COMPANY_DETAILS.jurisdiction} and is not
                    authorised in {form.country}. By opening an account you confirm that you approached us on
                    your own initiative and that we did not market or solicit these services to you in your
                    country of residence. Trading conditions, including leverage, may differ from those a locally
                    authorised firm could offer you. See the <Link to="/client-agreement">client agreement</Link> and
                    the <Link to="/risk-disclosure">risk disclosure</Link>.
                  </span>
                </p>
              )}

              {mode === 'login' ? (
                <div className="lg-row">
                  <label className="lg-check" htmlFor="lg-remember">
                    <input id="lg-remember" type="checkbox" checked={form.remember} onChange={set('remember')} />
                    <span className="lg-box"><Svg d={Icon.check} size={12} /></span>
                    Keep me signed in
                  </label>
                  <a className="lg-link" href={`mailto:${COMPANY_DETAILS.supportEmail}?subject=Password%20reset`}>Forgot password?</a>
                </div>
              ) : (
                <>
                  <label className={`lg-check is-block${show('agree') ? ' is-bad' : ''}`} htmlFor="lg-agree">
                    <input id="lg-agree" type="checkbox" checked={form.agree} onChange={set('agree')} />
                    <span className="lg-box"><Svg d={Icon.check} size={12} /></span>
                    <span>I have read the <Link to="/client-agreement">client agreement</Link> and the <Link to="/risk-disclosure">risk disclosure</Link>, and I understand that trading leveraged products can cost me more than I expect.</span>
                  </label>
                  {show('agree') && <p className="lg-error">{errors.agree}</p>}
                </>
              )}

              <button className="lg-submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'One moment…' : mode === 'login' ? 'Log in' : 'Create account'}
                {status === 'sending' ? <span className="lg-spin" /> : <Svg d={Icon.arrow} size={16} />}
              </button>

              {status === 'sent' && (
                <p className="lg-notice" role="status">
                  <Svg d={Icon.info} size={16} />
                  <span>
                    The client portal is not connected to this site yet, so nothing was submitted and your details were not sent.
                    Email <a href={`mailto:${COMPANY_DETAILS.supportEmail}`}>{COMPANY_DETAILS.supportEmail}</a> and the desk will {mode === 'login' ? 'get you in' : 'open your account'}.
                  </span>
                </p>
              )}
            </form>

            <p className="lg-swap">
              {mode === 'login' ? (
                <>New to {COMPANY_DETAILS.shortName}? <button type="button" onClick={() => switchMode('register')}>Open an account</button></>
              ) : (
                <>Already have an account? <button type="button" onClick={() => switchMode('login')}>Log in</button></>
              )}
            </p>
          </div>
        </section>

        <p className="lg-risk">
          Trading leveraged products carries risk to your capital and is not suitable for everyone.
          Past performance is not a reliable indicator of future results.
        </p>
      </main>
    </div>
  );
}
