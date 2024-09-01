import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import PageTemplate from "../templates/page-template";

export default function EventsPage() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch("https://bestbuddies.ae/wp/wp-json/wp/v2/posts")
			.then((response) => response.json())
			.then((posts) => {
				// Handle the posts data
				setPosts(posts);
			})
			.catch((error) => {
				// Handle errors
				console.error("Error fetching posts:", error);
			});
	}, []);
	console.log(posts);
	return (
		<PageTemplate header="Attend an Event">
			<div id="event-page" className="involved-page">
				{posts.map((post) => (
					<Post key={post.id} post={post} />
				))}
			</div>
		</PageTemplate>
	);
}
