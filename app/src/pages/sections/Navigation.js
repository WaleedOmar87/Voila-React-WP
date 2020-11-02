import React, { useState } from "react";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { Search } from "../modals/Search";
import { FaSearch, FaWindowClose } from "react-icons/fa";

export const Navigation = () => {
	const [open, setOpen] = useState(false);

	const toggleOpen = (element) => {
		element === 'search' ? setOpen(true) : setOpen(false)
	};

	return (
		<>
			<Search open={open} />
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
							<FaSearch
								className={() =>
									open === true ? "d-none" : ""
								}
								onClick={() => {
									toggleOpen("search");
								}}
							/>
							<FaWindowClose
								className={() =>
									open !== true ? "d-none" : ""
								}
								onClick={() => {
									toggleOpen("close");
								}}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
