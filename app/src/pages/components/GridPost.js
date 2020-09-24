import React from "react";
import { useState, useEffect } from "react";

export const GridPost = ({ post }) => {
	const [featuredMedia, setFeaturedMedia] = useState("");
	useEffect(() => {
		if (post.featuredImage) {
			post.featuredImage.then((data) => {
				data.source_url &&
					setFeaturedMedia(
						<img src={data.source_url} alt={data.slug} />
					);
			});
		}
	}, []);
	return (
		<div className="col-3 col-md-4">
			{featuredMedia}
			<h4 className="post-title">
				<a href={post.guid}>{post.title.rendered}</a>
			</h4>
			<p>{post.content.rendered}</p>
		</div>
	);
};
