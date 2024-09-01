import "../styles/common.css";
import "../styles/about.css";
// import { Outlet, Link } from "react-router-dom";

// import Page from '../components/Page';
import Partners from "../components/Partners";
// import Committee from '../components/Committee'
import PageTemplate from "../templates/page-template";

export default function AboutPage() {
	return (
		<PageTemplate header="About Us">
			<div className="about-page-content" id="about-page">
				<div className="two-col">
					<div className="col">
						<section id="mission">
							<h1>Mission</h1>
							<p>
								Best Buddies UAE is an organization under UAE
								federal law No. (2) of 2008 dedicated to
								establishing a global volunteer movement that
								creates opportunities for one-to-one
								friendships, integrated employment, and
								leadership development for People of
								Determination (people with intellectual and
								developmental disabilities).{" "}
							</p>
						</section>
						<section id="vision">
							<h1>Vision</h1>
							<p>
								To put Best Buddies out of business. Best
								Buddies envisions a world where People of
								Determination are so successfully integrated
								into schools, workplaces and communities that
								its current efforts and services will be
								unnecessary. Until that vision becomes a
								reality, the organization will continue to
								educate middle school, high school and college
								students, community members, corporations and
								employers about the emotional, functional, and
								natural needs and abilities of People of
								Determination.{" "}
							</p>
						</section>
						<section id="serve">
							<h1>Who We Serve</h1>
							<p>
								People of Determination including, but is not
								limited to, people with Down syndrome, autism,
								Fragile X, Williams syndrome, cerebral palsy,
								traumatic brain injury and other undiagnosed
								disabilities.{" "}
							</p>
						</section>
					</div>
					<div className="col" id="pillars-wrapper">
						<h2>Our Pillars</h2>
						<div id="pillars">
							<div className="pillar">
								<div id="friendship-pillar">
									<h3>Friendship</h3>
								</div>
							</div>
							<div className="pillar">
								<div id="employment-pillar">
									<h3>Employement</h3>
								</div>
							</div>
							<div className="pillar">
								<div id="leadership-pillar">
									<h3>Leadership</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<section className="intl">
					<h1>Best Buddies International</h1>
					<p>
						Founded in 1989 by Anthony K. Shriver, Best Buddies is a
						vibrant organization that has grown from one original
						chapter to nearly 3,000 chapters worldwide, positively
						impacting the lives of over 1.3 million people with and
						without IDD. Best Buddies programs engage participants
						in each of the 50 states and in 49 countries around the
						world.
					</p>
					<p>
						<a href="https://www.bestbuddies.org/">
							Learn More <i className="fa-solid fa-globe"></i>
						</a>
					</p>
				</section>
				{/* <Committee /> */}
				<Partners />
			</div>
		</PageTemplate>
	);
}
