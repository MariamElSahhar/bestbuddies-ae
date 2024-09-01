import "../styles/common.css";
import PageTemplate from "../templates/page-template";
import ComingSoon from "../components/ComingSoon";

export default function FAQ() {
	return (
		<PageTemplate header="FAQs">
			<div id="faq-page">
				<div id="faq-page-content">
					<ComingSoon />
				</div>
			</div>
		</PageTemplate>
	);
}
