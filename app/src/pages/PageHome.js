import React from "react";
import { Navigation } from "./sections/Navigation";
import { BlogGrid } from "./sections/BlogGrid";
import { Footer } from "./sections/Footer";

const Home = () => {
	return (
		<>
			<Navigation />
			<BlogGrid />
			<Footer />
		</>
	);
};
export default Home;
