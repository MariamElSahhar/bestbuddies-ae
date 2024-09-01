import React, { useState, useEffect } from "react";
import Post from "../components/event-card";
import PageTemplate from "../templates/page-template";
import { useGetEventsData } from "../hooks/use-get-events-data";
import DemoWebsiteTag from "../components/demo-website-tag";
import "../styles/common.css";
import "../styles/events.css";
import EventCard from "../components/event-card";

export default function EventsPage() {
	const { isLoading, data, isError } = useGetEventsData();

	return (
		<PageTemplate header="Attend an Event">
			<div id="events-page">
				<DemoWebsiteTag />
				<div id="events-page-content">
					<div className="events-container">
						{isLoading && <h1>Loading events...</h1>}
						{isError && <h1>Error loadinge events...</h1>}
						{data?.data.map((event) => (
							<EventCard key={event.id} event={event} />
						))}
					</div>
				</div>
			</div>
		</PageTemplate>
	);
}
