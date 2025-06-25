'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const toggleBtn = btnRef.current;
    if (!toggleBtn) return;

    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const saved =
      typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

    function updateBtnText() {
      if (toggleBtn) {
        toggleBtn.textContent = document.body.classList.contains('dark')
          ? 'light mode.'
          : 'dark mode.';
      }
    }

    if (saved === 'dark' || (!saved && prefersDark)) {
      document.body.classList.add('dark');
    }
    updateBtnText();

    function handleClick() {
      document.body.classList.toggle('dark');
      if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
      updateBtnText();
    }

    toggleBtn.addEventListener('click', handleClick);

    return () => {
      toggleBtn.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <nav className="side-menu">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>
          home
        </Link>
        {/* <Link href="#cases">cases</Link> */}
        {/* <Link href="#projects">projects</Link> */}
        {/* <Link href="#about">about me</Link> */}
        <Link
          href="/contact"
          className={pathname === '/contact' ? 'active' : ''}
        >
          contact
        </Link>
      </nav>
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220"
          height="200"
          viewBox="0 0 220 200"
          fill="none"
        >
          <g clipPath="url(#clip0_309_52)">
            <path
              d="M204 0H16C7.16344 0 0 7.16344 0 16V184C0 192.837 7.16344 200 16 200H204C212.837 200 220 192.837 220 184V16C220 7.16344 212.837 0 204 0Z"
              fill="#0A0A0A"
            />
            <path
              d="M37.3989 68.7192L73.4851 100L37.3989 131.281"
              stroke="#00C2FF"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M91.4587 48.5175L110.765 151.482L136.506 93.5646L162.247 151.482L181.553 48.5175"
              stroke="#00C2FF"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_309_52">
              <rect width="220" height="200" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span>Wallyx.</span>
      </div>
      {children}
      <button
        className="darkmode-btn"
        aria-label="Toggle dark mode"
        id="darkmode-toggle"
        ref={btnRef}
      >
        dark mode.
      </button>
    </>
  );
}
