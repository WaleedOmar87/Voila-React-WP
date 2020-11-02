const server = "http://localhost:80/html/voila-react/wp/wp-json";

export const apiConfig = {
	menusEndpoint: `${server}/voila-rest/v2/menus`,
	postsEndpoint: `${server}/wp/v2/posts`,
	mediaEndpoint: `${server}/wp/v2/media`,
	sidebarEndpoint: `${server}/voila-rest/v2/sidebar/`,
	searchEndpoint: `${server}/wp/v2/search`
};
