'use client';

import { useEffect, useState } from 'react';

const links = [
  ['Work', '/work'],
  ['Expertise', '/#expertise'],
  ['About Me', '/aboutme'],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/">AngieSun</a>
        <nav aria-label="Primary navigation">
          {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>
        <a className="contact-pill" href="#contact">Contact</a>
        <button className="menu-button" type="button" aria-label="Open menu" onClick={() => setOpen(true)}>
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Site navigation" aria-hidden={!open}>
        <button className="menu-close" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
        <nav>
          {links.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setOpen(false)}>{label}<span>↘</span></a>
          ))}
        </nav>
        <a className="menu-cta" href="#contact" onClick={() => setOpen(false)}>Let&apos;s do this</a>
      </div>
    </>
  );
}
