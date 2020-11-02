import React from "react";
import { useState, useEffect } from "react";
import { fetchWidgets } from "../../functions/component-functions";

export const Sidebar = () => {
	const [widgets, setWidgets] = useState([]);
	useEffect(() => {
		// fetch widgets content from the endpoint
		fetchWidgets("sidebar-2").then((data) => {
			if (data) {
				setWidgets(data);
			}
		});
	}, []);
	return (
		<aside className="sidebar">
			{widgets}
		</aside>
	);
};
