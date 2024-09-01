import { useState } from "react";

import "react-international-phone/style.css";
import "../styles/common.css";
import "../styles/contact.css";
import ContactForm from "../components/contact/ContactForm";
import PageTemplate from "../templates/page-template";

export default function ContactPage() {
	const [submission, setSubmission] = useState(false);

	const updateSubmission = (submissionStatus) => {
		setSubmission(submissionStatus);
	};

	const handleNewSubmission = () => {
		setSubmission(false);
	};

	return (
		<PageTemplate header="Contact Us">
			<div id="contact-page">
				{submission ? (
					<div id="thanks">
						<h1>
							Thanks for your message! We'll get back to you soon.
						</h1>
						<button onClick={handleNewSubmission}>
							Send another message
						</button>
					</div>
				) : (
					<ContactForm updateSubmission={updateSubmission} />
				)}
			</div>
		</PageTemplate>
	);
}
