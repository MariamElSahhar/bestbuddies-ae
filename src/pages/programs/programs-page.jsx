import "../../styles/common.css";
import "../../styles/programs.css";
import ProgramsSection from "../../components/ProgramsSection";
import { Outlet } from "react-router-dom";
import PageTemplate from "../../templates/page-template";

export default function ProgramsPage() {
	return (
		<PageTemplate header="programs">
			<div id="programs-page">
				<ProgramsSection />
			</div>
			<Outlet />
		</PageTemplate>
	);
}
