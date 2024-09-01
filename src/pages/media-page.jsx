import "../styles/common.css";
import "../styles/media.css";
import ComingSoon from "../components/ComingSoon";
import Header from "../components/Header";
import PageTemplate from "../templates/page-template";

export default function MediaPage() {
	return (
		<PageTemplate header="Media">
			<div id="media-page">
				<div id="media-page-content">
					<ComingSoon />
				</div>
			</div>
		</PageTemplate>
	);
}
