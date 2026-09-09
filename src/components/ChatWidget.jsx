import { Link } from 'react-router-dom';

/** Floating contact button, bottom-right on every page. */
export default function ChatWidget() {
  return (
    <Link to="/contact" className="mm-floating-contact" style={{
      position: 'fixed', bottom: '28px', right: '28px', zIndex: 100,
      width: '52px', height: '52px', borderRadius: '16px',
      background: '#ffffff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 6px 20px rgba(0,0,0,0.16)',
      border: '1px solid rgba(0,0,0,0.08)',
      textDecoration: 'none',
    }} aria-label="Contact us">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 3C6.477 3 2 6.92 2 11.75c0 1.84.64 3.54 1.74 4.92L2.3 20.45a.75.75 0 00.95 1.01l4.13-1.65c1.4.6 2.96.94 4.62.94 5.52 0 10-3.92 10-8.75S17.52 3 12 3z" fill="#111411"/>
        <path d="M9 13c1.2 1.5 4.8 1.5 6 0" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </Link>
  );
}
