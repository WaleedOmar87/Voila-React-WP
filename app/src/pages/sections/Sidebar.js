import React from "react";
import { fetchWidgets } from "../../functions/component-functions";

export const Sidebar = () => {
	const widgets = fetchWidgets("sidebar");

	return (
		<aside className="sidebar">
			{widgets.map((widget , index) => {
				return (
					<div key={index} className="widget-container">
						<h4 className="widget-title">{widget.title}</h4>
						<div className="widget-content">{widget.content}</div>
					</div>
				);
			})}
		</aside>
	);
};
