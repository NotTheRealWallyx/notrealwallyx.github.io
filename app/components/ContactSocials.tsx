import Image from 'next/image';

export type Theme = 'light' | 'dark';

export const socials = (theme: Theme) => [
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        role="img"
        aria-label="LinkedIn logo"
      >
        <rect width="40" height="40" rx="8" fill="#0A66C2" />
        <path
          d="M12.5 16.5h3v11h-3v-11zm1.5-1.5c.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75-1.75.784-1.75 1.75.784 1.75 1.75 1.75zm4.5 1.5h2.9v1.5h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59V27.5h-3v-5.09c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68V27.5h-3v-11z"
          fill="#fff"
        />
      </svg>
    ),
  },
  {
    href: 'https://github.com/',
    label: 'GitHub',
    icon: (
      <Image
        src={
          theme === 'dark'
            ? '/social_logos/github-mark-white.svg'
            : '/social_logos/github-mark.svg'
        }
        alt="GitHub"
        width={40}
        height={40}
        style={{ display: 'block' }}
        priority
      />
    ),
  },
  {
    href: 'https://codestats.net/',
    label: 'CodeStats',
    icon: (
      <Image
        src={
          theme === 'dark'
            ? '/social_logos/codeStats-white.svg'
            : '/social_logos/codeStats.svg'
        }
        alt="CodeStats"
        width={40}
        height={40}
        style={{ display: 'block' }}
        priority
      />
    ),
  },
];

export function ContactSocials({ theme }: { theme: Theme }) {
  return (
    <div className="contact-socials">
      {socials(theme).map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="contact-social"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}
