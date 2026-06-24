import "@components/AboutInfoCard/AboutInfoCard.css";

type AboutInfoCardItem = {
	date: string;
	role: string;
	location: string;
};

type AboutInfoCardProps = {
	title: string;
	items: AboutInfoCardItem[];
};

export function AboutInfoCard({ title, items }: AboutInfoCardProps) {
	return (
		<div className="about-info-card">
			<div className="about-info-card-title">{title}</div>
			<ul>
				{items.map((item) => (
					<li key={`${item.date}-${item.role}-${item.location}`}>
						<div className="about-job-date">{item.date}</div>
						<div className="about-job-role">{item.role}</div>
						<div className="about-job-location">{item.location}</div>
					</li>
				))}
			</ul>
		</div>
	);
}
