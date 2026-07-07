import { ProjectCard } from "@components/ProjectCard/ProjectCard";
import "./projects.css";

const projects = [
	{
		title: "codestats-badge",
		description:
			"Dynamic SVG badges for your Code::Stats profile — show off your XP, top languages, and coding activity in your GitHub README.",
		tags: ["SVG", "Vercel", "GitHub"],
		links: [
			{ label: "LIVE", href: "https://codestats-badge.vercel.app" },
			{
				label: "REPO",
				href: "https://github.com/NotTheRealWallyx/codestats-badge",
			},
		],
	},
	{
		title: "wattsandcarbs",
		description: "Fueling plans for cyclists.",
		tags: ["Cycling", "Nutrition"],
		links: [
			{ label: "LIVE", href: "https://wattsandcarbs.netlify.app" },
			{
				label: "REPO",
				href: "https://github.com/NotTheRealWallyx/WattsAndCarbs",
			},
		],
	},
	{
		title: "GitBlend",
		description:
			"gib (GitBlend) — a Python CLI that blends Git and GitHub commands: tags, commits, remotes, and multi-repo updates in one tool.",
		tags: ["Python", "CLI", "Git"],
		links: [
			{ label: "REPO", href: "https://github.com/NotTheRealWallyx/GitBlend" },
		],
	},
	{
		title: "CTRL_Node",
		description:
			"Small scripts for server knowledge and management — DNS lookup and port scanning on a target host.",
		tags: ["Python", "DNS", "Networking"],
		links: [
			{ label: "REPO", href: "https://github.com/NotTheRealWallyx/CTRL_Node" },
		],
	},
];

export default function Projects() {
	return (
		<div className="projects-container">
			<section className="projects-header">
				<h1 className="projects-title">
					projects
					<span className="projects-underline" />
				</h1>
			</section>
			<section className="projects-grid">
				{projects.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</section>
		</div>
	);
}
