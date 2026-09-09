import { useState } from 'react';
import { LogoMark } from '../components/BrandLogo.jsx';

// Client login screen: split art panel + credential form. The fields are
// controlled, but there is no auth backend in this project — submitting is a no-op.
export default function Login() {
  const [email, setEmail] = useState('trader@movementmarkets.com');
  const [password, setPassword] = useState('movementmarkets');
  const [remember, setRemember] = useState(false);

  function handleSubmit(event) {
    // No auth backend in this project — keep the browser on the page.
    event.preventDefault();
  }

  return (
    <main className="login-page">
      <a href="/" className="login-back" aria-label="Back to Movement Markets home"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left" aria-hidden="true"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>Home</a>
      <section className="login-shell" aria-labelledby="login-title">
        <div className="login-art-panel">
          <div className="login-art-copy">
            <span>Movement Markets</span>
            <h1>Simplify the setup.<br />Move with the market.</h1>
            <p>One secure desk for funding, platforms and global trading access.</p>
          </div>
          <div className="login-blue-field" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="login-art-card" aria-hidden="true">
            <span>Live session</span>
            <strong>EUR/USD</strong>
            <small>1.16842 +0.18%</small>
          </div>
        </div>
        <div className="login-form-panel">
          <div className="login-logo-row">
            <LogoMark className="login-logo-mark" />
            <span className="logo-word"><b>Movement</b> Markets</span>
          </div>
          <h2 id="login-title">Log in to your account</h2>
          <p>Welcome back. Enter your details to access your trading dashboard.</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <div className="login-input-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" aria-hidden="true">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              <input type="email" data-slot="input" className="h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40" id="email" autoComplete="email" required name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <label htmlFor="password">Password</label>
            <div className="login-input-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole" aria-hidden="true">
                <circle cx="12" cy="16" r="1" />
                <rect x="3" y="10" width="18" height="12" rx="2" />
                <path d="M7 10V7a5 5 0 0 1 10 0v3" />
              </svg>
              <input type="password" data-slot="input" className="h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40" id="password" autoComplete="current-password" required name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div className="login-options">
              <label className="remember-row" htmlFor="remember">
                <button type="button" role="checkbox" aria-checked={remember} data-state={remember ? 'checked' : 'unchecked'} onClick={() => setRemember((value) => !value)} value="on" data-slot="checkbox" className="peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary" id="remember" />
                <input type="checkbox" aria-hidden="true" tabIndex="-1" style={{ position: 'absolute', pointerEvents: 'none', opacity: '0', margin: '0', transform: 'translateX(-100%)' }} value="on" checked={remember} readOnly />
                <span>Remember me</span>
              </label>
              <a href="mailto:support@movementmarkets.com">Forgot password?</a>
            </div>
            <button data-slot="button" data-variant="default" data-size="default" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 login-submit" type="submit">Log in <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></button>
          </form>
          <div className="login-divider">
            <div data-orientation="horizontal" role="none" data-slot="separator" className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
            <span>Or continue with</span>
            <div data-orientation="horizontal" role="none" data-slot="separator" className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px" />
          </div>
          <div className="social-login-grid">
            <button data-slot="button" data-variant="secondary" data-size="default" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 has-[>svg]:px-3 social-login" type="button"><span className="google-mark">G</span>Sign in with Google</button>
            <button data-slot="button" data-variant="secondary" data-size="default" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 has-[>svg]:px-3 social-login" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple" aria-hidden="true"><path d="M12 6.528V3a1 1 0 0 1 1-1h0" /><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" /></svg>Sign in with Apple</button>
          </div>
          <div className="secure-note"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>Protected login for Movement Markets clients.</div>
          <p className="create-account">Do not have an account? <a href="/">Create one</a></p>
        </div>
      </section>
    </main>
  );
}
