import "../../../styles/common.css";
import "../../../styles/programs.css";
import ComingSoon from "../../../components/coming-soon-tag";
import PageTemplate from "../../../templates/page-template";

export default function EmploymentPage() {
	return (
		<PageTemplate header="Employment and Workplace Integration">
			<div id="employment-page" className="program-page">
				<section className="two-col">
					<div className="col">
						<ComingSoon />
						<h2>Best Buddies Jobs Program</h2>
						<p>
							The Best Buddies Jobs program represents one of our
							organization’s three key mission pillars, Integrated
							Employment. This program secures jobs for people of
							determination, allowing them to earn an income, and
							continuously support themselves.
						</p>
						<p>
							The Jobs program places focus beyond the typical
							jobs in which a person of determination might be
							placed. Best Buddies focuses on finding work that
							matches the job seeker’s interests and talents.
						</p>
					</div>
					<iframe
						className="col"
						width="555"
						height="312"
						src="https://www.youtube.com/embed/VMCMLezro-A"
						title="Best Buddies: Integrated Employment"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
					></iframe>
				</section>
			</div>
		</PageTemplate>
	);
}
