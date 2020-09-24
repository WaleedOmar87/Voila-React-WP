import React from "react";
import { fetchWidgets } from "../../functions/component-functions";

export const Footer = (props) => {
	/* Retrieve widgets from the endpoint */
	const widgets = fetchWidgets("footer");

	return (
		<footer className="footer" id="footer">
			<div className="container">
				<div className="row">
					{widgets.map((widget , index) => {
						return (
							<div  key={index} className="col-6 col-md-3">
								<div className="widget-container">
									<h5 className="widget-title">
										{widget.title}
									</h5>
									<div className="widget-content">
										{widget.content}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</footer>
	);
};
