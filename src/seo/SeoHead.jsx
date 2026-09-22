import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeo, SOCIAL_IMAGE } from './routes.js';

function setMeta(key, value, attribute = 'name') {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

export default function SeoHead() {
  const { pathname } = useLocation();
  useEffect(() => {
    const seo = getSeo(pathname);
    document.title = seo.title;
    setMeta('description', seo.description);
    setMeta('robots', seo.index ? 'index, follow' : 'noindex, follow');
    setMeta('og:title', seo.title, 'property');
    setMeta('og:description', seo.description, 'property');
    if (seo.canonical) setMeta('og:url', seo.canonical, 'property');
    else document.head.querySelector('meta[property="og:url"]')?.remove();
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);
    setMeta('twitter:image', SOCIAL_IMAGE);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical && seo.canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    if (seo.canonical) canonical.href = seo.canonical;
    else canonical?.remove();
  }, [pathname]);
  return null;
}
