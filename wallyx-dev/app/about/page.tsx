'use client';
import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="about-container" style={{ marginTop: '4.5rem' }}>
      <section className="about-header">
        <h1 className="about-title about-desc-geist">
          about me
          <span className="about-underline" />
        </h1>
      </section>
      <section className="about-main">
        <div className="about-profile">
          <img
            src="ProfilePic.png"
            alt="Profile"
            className="about-profile-img"
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
        <div className="about-skill-card">
          {/* Replace with your own SVG/icon */}
          <span className="about-skill-icon">🎨</span>
          <div>
            <div className="about-skill-title">Interface &amp; Design</div>
            <div className="about-skill-desc">
              Briefing, wireframe, UX, UI and branding.
            </div>
          </div>
        </div>
        <div className="about-skill-card">
          <span className="about-skill-icon">💻</span>
          <div>
            <div className="about-skill-title">HTML &amp; CSS</div>
            <div className="about-skill-desc">
              Responsive websites with fast loading.
            </div>
          </div>
        </div>
        <div className="about-skill-card">
          <span className="about-skill-icon">⚛️</span>
          <div>
            <div className="about-skill-title">React.js</div>
            <div className="about-skill-desc">
              Build your system with node.js.
            </div>
          </div>
        </div>
        <div className="about-skill-card">
          <span className="about-skill-icon">📝</span>
          <div>
            <div className="about-skill-title">WordPress</div>
            <div className="about-skill-desc">
              Create your e-commerce or blog with PHP.
            </div>
          </div>
        </div>
      </section>
      <section className="about-info-cards about-info-cards-row">
        <div className="about-info-card">
          <div className="about-info-card-title">Experience</div>
          <ul>
            <li>
              <span className="about-job-date">2024 - Present</span>
              Co-Founder & Engineering
              <span className="about-job-location">
                Particel (United Kingdom)
              </span>
            </li>
            <li>
              <span className="about-job-date">2022 - Present</span>
              Head of Engineering
              <span className="about-job-location">
                Hiveound (United Kingdom)
              </span>
            </li>
            <li>
              <span className="about-job-date">2020 - 2022</span>
              Software Engineer
              <span className="about-job-location">
                Eigen Technologies (United Kingdom)
              </span>
            </li>
            <li>
              <span className="about-job-date">2017 - 2019</span>
              Full Stack Developer
              <span className="about-job-location">
                SUUMA&B10 Projects (Spain)
              </span>
            </li>
            <li>
              <span className="about-job-date">2016 - 2017</span>
              WordPress Developer
              <span className="about-job-location">
                Serinfor Marketing (Spain)
              </span>
            </li>
            <li>
              <span className="about-job-date">2015</span>
              WordPress Developer
              <span className="about-job-location">A2 Informatica (Spain)</span>
            </li>
          </ul>
        </div>
        <div className="about-info-card">
          <div className="about-info-card-title">Education</div>
          <ul>
            <li>
              <span className="about-job-date">2015 - 2016</span>
              Mobile Applications Development
              <span className="about-job-location">
                IES Uni Eibar Ermua (Spain)
              </span>
            </li>
            <li>
              <span className="about-job-date">2013 - 2015</span>
              Web Applications Development
              <span className="about-job-location">
                IESFPS Zornotza (Spain)
              </span>
            </li>
            <li>
              <span className="about-job-date">2011 - 2013</span>
              Informatics Engineering
              <span className="about-job-location">
                Mondragon University (Spain)
              </span>
            </li>
            <li>
              <span className="about-job-date">2009 - 2011</span>
              Technological Scientific Bachelor
              <span className="about-job-location">
                Maristak Durango (Spain)
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
