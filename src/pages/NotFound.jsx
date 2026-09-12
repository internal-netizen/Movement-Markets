import { Link } from 'react-router-dom';
import PageShell from '../components/page/PageShell.jsx';

// F18 — the router used to render the homepage for every unknown URL, so a
// mistyped address returned a 200 and search engines indexed duplicates.
export default function NotFound() {
  return (
    <PageShell title="Page not found">
      <main className="pg">
        <section className="pg-section">
          <div className="pg-wrap">
            <p className="pg-eyebrow">404</p>
            <h1 className="pg-h1">That page does not exist.</h1>
            <p className="pg-lead pg-hero-copy">
              The link may be out of date, or the address mistyped. Everything below is a good place to pick up again.
            </p>
            <div className="pg-actions">
              <Link className="pg-btn" to="/">Home</Link>
              <Link className="pg-btn" to="/accounts">Account types</Link>
              <Link className="pg-btn" to="/markets">Markets</Link>
              <Link className="pg-btn" to="/help">Help centre</Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
