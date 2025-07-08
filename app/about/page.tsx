"use client";
import "./about.css";
import Image from "next/image";

export default function About() {
	return (
		<div className="about-container" style={{ paddingTop: "5.5rem" }}>
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
				<div className="about-skill-card">
					<span className="about-skill-icon">💻</span>
					<div>
						<div className="about-skill-title">Programming skills</div>
						<div className="about-skill-desc">
							Skilled in Python, TypeScript, PHP, Flask, JavaScript, .NET, HTML,
							CSS, Bash, Java, C, SQL & NoSQL.
						</div>
					</div>
				</div>
				<div className="about-skill-card">
					<span className="about-skill-icon">☁️</span>
					<div>
						<div className="about-skill-title">Cloud & Server Management</div>
						<div className="about-skill-desc">
							Experienced in AWS deployment, maintenance, and optimization of
							cloud-based applications.
						</div>
					</div>
				</div>
				<div className="about-skill-card">
					<span className="about-skill-icon">🧑‍💼</span>
					<div>
						<div className="about-skill-title">Team Management</div>
						<div className="about-skill-desc">
							Leadership in engineering teams, project management, and agile
							methodologies.
						</div>
					</div>
				</div>
				<div className="about-skill-card">
					<span className="about-skill-icon">🖥️</span>
					<div>
						<div className="about-skill-title">Computer Skills</div>
						<div className="about-skill-desc">
							Proficient in Microsoft Office, Adobe Suite, Windows, Linux,
							macOS, and dev environments.
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
