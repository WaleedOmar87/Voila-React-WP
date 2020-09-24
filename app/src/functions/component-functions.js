import React from "react";
import { apiConfig } from "../config/api/api.config";

/*
	Fetch Navigation Menu Items
	to edit menus items slug check config/api/api.config.js
*/
const fetchNavigationItems = () => {
	return fetch(apiConfig.menusEndpoint).then((res) => res.json());
};

/*
	Fetch posts based on custom query string
	@var queryArguments , fetch query , for reference https://developer.wordpress.org/rest-api/reference/posts/
*/
const fetchPosts = (queryArguments) => {
	// prepare query string from queryArguments
	const queryString = Object.keys(queryArguments)
		.map((arg) => `${arg}=${queryArguments[arg]}`)
		.join("&");

	// prepare the endpoint to fetch posts based on queryString
	const postsEndpoint = `${apiConfig.postsEndpoint}/?${queryString}`;

	return fetch(postsEndpoint)
		.then((res) => res.json())
		.then((data) => {
			/*
			Map posts object and fetch post media if current post have a featured image
		*/
			return (
				data.length &&
				data.map((post) => {
					if (post.featured_media > 0) {
						post.featuredImage = fetch(
							`${apiConfig.mediaEndpoint}/${post.featured_media}`
						).then((res) => res.json());
					}
					return post;
				})
			);
		});
};

/*
Fetch Widgets Based On Sidebar ID
*/
const fetchWidgets = (sidebarID) => {
	return [
		{
			title: "about us widget",
		},
	];
};

export { fetchNavigationItems, fetchPosts, fetchWidgets };
