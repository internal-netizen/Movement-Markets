// The WebGL keycap is commented out for now. Uncomment this import and its
// use below to bring it back; nothing else in this panel depends on it.
// import KeycapButton from './KeycapButton.jsx';

// Closing call-to-action panel. It was built around a pressable WebGL keycap
// (three.js, lazily loaded); with that disabled the panel falls back to the
// "Open an account" pill, which was always the non-WebGL path anyway.
export default function CtaPanel() {
  return (
    <section className="cta-wrap">
      <div className="cta-panel">
        <div className="cta-grid-lines" />
        <div className="cta-glow cta-glow-left" />
        <div className="cta-glow cta-glow-right" />
        <span className="brand-mark brand-mark-dark" aria-hidden="true">
          <span />
          <span />
        </span>
        <div className="glass-ticket cta-glass-ticket" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fingerprint-pattern" aria-hidden="true">
            <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
            <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
            <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
            <path d="M2 12a10 10 0 0 1 18-6" />
            <path d="M2 16h.01" />
            <path d="M21.8 16c.2-2 .131-5.354 0-6" />
            <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
            <path d="M8.65 22c.21-.66.45-1.32.57-2" />
            <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
          </svg>
          <span>
            <small>Secure account opening</small>
            <strong>Movement Markets access</strong>
          </span>
        </div>
        {/* <KeycapButton to="/login" label="Open a Movement Markets account" /> */}
        <h2>Better trading begins with<br />a broker built to move.</h2>
        <p>Open your Movement Markets account and trade global opportunities with confidence.</p>
        <a className="pill-button pill-light" href="/login">Open an account <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></a>
      </div>
    </section>
  );
}
