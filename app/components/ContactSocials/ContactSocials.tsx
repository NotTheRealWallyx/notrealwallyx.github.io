import Image from 'next/image';

export type Theme = 'light' | 'dark';

export const socials = (theme: Theme) => [
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    icon: (
      <Image
        src={
          theme === 'dark'
            ? '/social_logos/linkedin-white.svg'
            : '/social_logos/linkedin.svg'
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
