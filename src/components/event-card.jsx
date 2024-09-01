import React from "react";

export default function EventCard({ event }) {

	return (
		<div key={event.id} className="event-card">
			<h3 className="event-title">{event.title.rendered}</h3>
			<p
				className="event-content"
				dangerouslySetInnerHTML={{ __html: event.content.rendered }}
			></p>
		</div>
	);
}
