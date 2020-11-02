import React, { useState } from "react";

export const Search = (props) => {
	const { open } = props;
	const [formFields, setFormFields] = useState({});
	const submitForm = (event) => {
		event.preventDefault();
	};
	const handleSearchChange = (event) => {
		setFormFields({search: event.target.value})
	}
	const searchForm = () => {
		return (
			<form onSubmit={submitForm}>
				<input
					type="text"
					onChange={handleSearchChange}
					value={formFields.searchValue}
					className="input-search"
				/>
			</form>
		);
	};
	return open ? (
		<div className="container-fluid">
			<div className="row">
				<div className="col">{searchForm()}</div>
			</div>
		</div>
	) : (
		""
	);
};
