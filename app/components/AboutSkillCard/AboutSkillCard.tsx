import "@components/AboutSkillCard/AboutSkillCard.css";

interface AboutSkillCardProps {
	icon: React.ReactNode;
	title: string;
	desc: string;
}

export function AboutSkillCard({ icon, title, desc }: AboutSkillCardProps) {
	return (
		<div className="about-skill-card">
			<span className="about-skill-icon">{icon}</span>
			<div>
				<div className="about-skill-title">{title}</div>
				<div className="about-skill-desc">{desc}</div>
			</div>
		</div>
	);
}
