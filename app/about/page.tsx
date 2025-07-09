'use client';
import { AboutInfo } from '@components/AboutInfo/AboutInfo';
import { AboutSkillCard } from '@components/AboutSkillCard/AboutSkillCard';
import './about.css';
import Image from 'next/image';

export default function About() {
  return (
    <div className="about-container">
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
            I'm a friendly coder who loves to experiment, learn, and share
            knowledge. I'm always looking for new challenges and ways to grow.
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
          icon="🚀"
          title="Fast Learner"
          desc="I pick up new technologies and concepts quickly, always staying up-to-date with the latest trends in software and tech."
        />
        <AboutSkillCard
          icon="🧩"
          title="Problem Solver"
          desc="I love breaking down complex problems and finding creative, efficient solutions that make a real impact."
        />
        <AboutSkillCard
          icon="🛠️"
          title="Versatile Developer"
          desc="From backend APIs to frontend design, I enjoy working across the stack and adapting to project needs."
        />
        <AboutSkillCard
          icon="✍️"
          title="Clear Documenter"
          desc="I write concise, helpful documentation and comments to make life easier for my future self and teammates."
        />
        <AboutSkillCard
          icon="🧪"
          title="Experimenter"
          desc="I love trying out new ideas, tools, and approaches—always exploring ways to make things better or more interesting."
        />
      </section>
      <section className="about-info-cards about-info-cards-row">
        <AboutInfo />
      </section>
    </div>
  );
}
