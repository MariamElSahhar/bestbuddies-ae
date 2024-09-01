import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scroll-to-top";
import { QueryClient, QueryClientProvider } from "react-query";
// Pages
import AboutPage from "./pages/about-page";
import BecomeABuddyPage from "./pages/get-involved/get-involved-pages/become-a-buddy-page";
import ContactPage from "./pages/contact-page";
import StartAChapter from "./pages/get-involved/get-involved-pages/start-a-chapter-page";
import Donate from "./pages/donation-page";
import BecomeAnEmployerPage from "./pages/get-involved/get-involved-pages/become-an-employer-page";
import EmploymentPage from "./pages/programs/program-pages/employment-page";
import EventsPage from "./pages/events-page";
import FAQ from "./pages/faq-page";
import FriendshipPage from "./pages/programs/program-pages/friendship-page";
import HomePage from "./pages/home-page";
import GetInvolvedPage from "./pages/get-involved/get-involved-page";
import LeadershipPage from "./pages/programs/program-pages/leadership-page";
import Media from "./pages/media-page";
import BecomeAMentor from "./pages/get-involved/get-involved-pages/become-a-mentor-page";
import ProgramsPage from "./pages/programs/programs-page";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="contact-us" element={<ContactPage />} />
					<Route path="donate" element={<Donate />} />
					<Route path="FAQ" element={<FAQ />} />
					<Route path="events" element={<EventsPage />} />
					<Route path="get-involved">
						<Route index element={<GetInvolvedPage />} />
						<Route
							path="become-a-buddy"
							element={<BecomeABuddyPage />}
						/>
						<Route
							path="become-a-mentor"
							element={<BecomeAMentor />}
						/>
						<Route
							path="become-an-employer"
							element={<BecomeAnEmployerPage />}
						/>
						<Route
							path="start-a-chapter"
							element={<StartAChapter />}
						/>
					</Route>
					<Route path="media" element={<Media />} />
					<Route path="programs">
						<Route index element={<ProgramsPage />} />
						<Route path="friendship" element={<FriendshipPage />} />
						<Route path="employment" element={<EmploymentPage />} />
						<Route path="leadership" element={<LeadershipPage />} />
					</Route>
				</Routes>
				<ScrollToTop />
			</BrowserRouter>
		</QueryClientProvider>
	);
};

export default App;
