import React from "react";
import { useEffect, useState } from "react";
import { fetchNavigationItems } from "../../functions/component-functions";

export const Menu = () => {
	const [menus, setMenus] = useState([]);
	useEffect(() => {
		fetchNavigationItems().then((data) => setMenus(data));
	}, []);
	return (
		<ul className="d-flex navigation-menu">
			{menus.length &&
				menus.map((item) => {
					return (
						<li key={item.ID}>
							<a href={item.url}>{item.title}</a>
						</li>
					);
				})}
		</ul>
	);
};
