import "../../styles/common.css";
import "../../styles/involved.css";
import PageTemplate from "../../templates/page-template";

export default function GetInvolvedPage() {
	return (
		<PageTemplate header="Get Involved">
			<div id="get-involved-page">
				<div id="get-involved-content">
					<h2>
						We're launching soon! Check in again later for more
						information.
					</h2>
				</div>
				{/* < Outlet /> */}
			</div>
		</PageTemplate>
	);
}
