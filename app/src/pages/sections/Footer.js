import React from "react";
import { useState, useEffect } from "react";
import { fetchWidgets } from "../../functions/component-functions";

export const Footer = (props) => {
	const [widgets, setWidgets] = useState(false);
	useEffect(() => {
		// fetch widgets content from the endpoint
		fetchWidgets("sidebar-1").then((data) => {
			if (data) {
				setWidgets(data);
			}
		});
	}, []);

	return (
		<footer className="footer" id="footer">
			<div className="container">
				<div className="row">
					<div className="col">{widgets}</div>
				</div>
			</div>
		</footer>
	);
};
