/** biome-ignore-all lint/a11y/noSvgWithoutTitle: Title no needed on logos */
'use client';
import { useEffect, useState } from 'react';
import './socials.css';

import { ContactSocials } from '../components/ContactSocials/ContactSocials';

export default function Socials() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    function getTheme() {
      if (typeof window === 'undefined') return 'light';
      if (document.body.classList.contains('dark')) return 'dark';
      return 'light';
    }
    setTheme(getTheme());

    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-container">
      <h2 className="contact-title">
        socials
        <span className="contact-underline" />
      </h2>
      <ContactSocials theme={theme} />
    </div>
  );
}
