'use client';
import { AboutInfo } from '@components/AboutInfo/AboutInfo';
import { AboutSkillCard } from '@components/AboutSkillCard/AboutSkillCard';
import './about.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className="about-container" style={{ paddingTop: '5.5rem' }}>
      <section className="about-header">
        <h1 className="about-title about-desc-geist">
          about me
          <span className="about-underline" />
        </h1>
      </section>
      <section className="about-main">
        <div className="about-profile">
          <Image
            src="/ProfilePic.png"
            alt="Profile"
            className="about-profile-img"
            width={200}
            height={200}
            priority
          />
        </div>
        <div className="about-info">
          <h2 className="about-name">Mikel Sanchez</h2>
          <p className="about-desc">
            I am serious and easy-going, driven by a passion for continuous
            improvement and a commitment to overcoming challenges. My goal is to
            contribute my skills and expertise to dynamic and innovative
            projects, leveraging my diverse experience in software development.
            My objective is not just to meet expectations but to exceed them.
          </p>
          <div className="about-links">
            <a
              href="https://github.com/NotTheRealWallyx"
              target="_blank"
              rel="noopener noreferrer"
            >
              GITHUB
            </a>
            <a href="mailto:mikelsmartinez@aol.com">EMAIL</a>
          </div>
        </div>
      </section>
      <section className="about-skills-row">
        <AboutSkillCard
          icon="💻"
          title="Programming skills"
          desc="Skilled in Python, TypeScript, PHP, Flask, JavaScript, .NET, HTML, CSS, Bash, Java, C, SQL & NoSQL."
        />
        <AboutSkillCard
          icon="☁️"
          title="Cloud & Server Management"
          desc="Experienced in AWS deployment, maintenance, and optimization of cloud-based applications."
        />
        <AboutSkillCard
          icon="🧑‍💼"
          title="Team Management"
          desc="Leadership in engineering teams, project management, and agile methodologies."
        />
        <AboutSkillCard
          icon="🖥️"
          title="Computer Skills"
          desc="Proficient in Microsoft Office, Adobe Suite, Windows, Linux, macOS, and dev environments."
        />
      </section>
      <section className="about-info-cards about-info-cards-row">
        <AboutInfo />
      </section>
    </div>
  );
}
