import "../styles/common.css";
import "../styles/home.css";
import Partners from "../components/Partners";
import ProgramsSection from "../components/ProgramsSection";
import PageTemplate from "../templates/page-template";

export default function HomePage() {
	return (
		<PageTemplate>
			<div id="home-page" home="true" page="Home">
				<header className="home-header">
					<div className="banner">
						<img
							src="/assets/images/main-header.jpeg"
							alt="banner"
						></img>
						<div className="banner-text">
							<h1>Best Buddies UAE</h1>
							<p>Fostering Inclusive Communities.</p>
						</div>
					</div>
				</header>
				<ProgramsSection />
				{/* <section className="join">
                <div className="section-header">
                    <h1 className="take-action">How You Can Get Involved</h1>
                </div>
                <div className="section-content">
                    <div className="participate section-item join-item">
                        <img src="/assets/images/bb-donate-ca.jpg" alt=""></img>
                        <button>Start a Chapter</button>
                    </div>
                    <div className="join-donate section-item join-item">
                        <img src="/assets/images/attend-an-event.webp" alt=""></img>
                        <button>Become a Buddy</button>
                    </div>
                    <div className="attend section-item join-item">
                        <img src="/assets/images/attend-an-event.webp" alt=""></img>
                        <button>Attend an Event</button>
                    </div>
                </div>
            </section> */}
				{/* <section className="news">
                <h1>News</h1>
                <article></article>
            </section> */}
				<Partners />
			</div>
		</PageTemplate>
	);
}
