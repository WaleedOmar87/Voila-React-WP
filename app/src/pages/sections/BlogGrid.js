import React from "react";
import { useState, useEffect } from "react";
import { fetchPosts } from "../../functions/component-functions";
import { GridPost } from "../components/GridPost";
import { Sidebar } from "../sections/Sidebar";

const BlogGrid = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		/*
			Fetch posts using query custom query arguments
		*/
		fetchPosts({
			per_page: 3,
		}).then((data) => {
			setPosts(data);
		});
	}, []);
	return (
		<>
			<section className="blog-grid">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-8">
							{posts.length &&
								posts.map((post, index) => {
									return <GridPost key={index} post={post} />;
								})}
						</div>
						<div className="col-12 col-md-4">
							<Sidebar />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { BlogGrid };
