import "../../../styles/common.css";
import "../../../styles/programs.css";
import ComingSoon from "../../../components/coming-soon-tag";
import PageTemplate from "../../../templates/page-template";

export default function FriendshipPage() {
	return (
		<PageTemplate header="One-to-One Friendships">
			<div id="friendship-page" className="program-page">
				<section className="two-col">
					<div className="col">
						<ComingSoon />
						<h2>Best Buddies Friendship Program</h2>
						<p>
							The Best Buddies Friendship program represent one of
							our organization’s three key mission pillars. These
							programs build one-to-one friendships between people
							with and without intellectual and developmental
							disabilities, offering social interactions while
							improving the quality of life and level of inclusion
							for a population that is often isolated and
							excluded. Through their participation, people of
							determination form meaningful connections with their
							peers, gain self-confidence and self-esteem, and
							share interests, experiences and activities that
							many other individuals enjoy.
						</p>
					</div>
					<iframe
						className="col"
						width="555"
						height="312"
						src="https://www.youtube.com/embed/4x3n95uu9qA"
						title="Best Buddies: One-To-One Friendships"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
					></iframe>
				</section>
			</div>
		</PageTemplate>
	);
}
