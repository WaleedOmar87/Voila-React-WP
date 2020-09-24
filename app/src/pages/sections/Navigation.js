import React from "react";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import {FaAlignJustify} from "react-icons/fa";

export const Navigation = () => {
	return (
		<section className="navigation">
			<div className="container">
				<div className="row d-flex align-content-center">
					<div className="col">
						<Logo />
					</div>
					<div className="col d-flex justify-content-center">
						<Menu />
					</div>
					<div className="col d-flex justify-content-end">
						<FaAlignJustify />
					</div>
				</div>
			</div>
		</section>
	);
};
