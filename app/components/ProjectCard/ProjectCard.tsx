import "@components/ProjectCard/ProjectCard.css";

type ProjectLink = {
	label: string;
	href: string;
};

type ProjectCardProps = {
	title: string;
	description: string;
	tags?: string[];
	links: ProjectLink[];
};

export function ProjectCard({
	title,
	description,
	tags = [],
	links,
}: ProjectCardProps) {
	return (
		<div className="project-card">
			<div className="project-card-title">{title}</div>
			<p className="project-card-desc">{description}</p>
			{tags.length > 0 && (
				<div className="project-card-tags">
					{tags.map((tag) => (
						<span key={tag} className="project-card-tag">
							{tag}
						</span>
					))}
				</div>
			)}
			<div className="project-card-links">
				{links.map((link) => (
					<a
						key={link.label}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						className="project-card-link"
					>
						{link.label}
					</a>
				))}
			</div>
		</div>
	);
}
