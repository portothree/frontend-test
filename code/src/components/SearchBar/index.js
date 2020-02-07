import React, { useState } from "react";

import "./style.scss";

export default function SearchBar() {
	const [param, setParam] = useState("");

	const handleSearchParam = e => {
		setParam(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<form className="search" onSubmit={handleSubmit}>
			<label className="screen-reader-only" htmlFor="scbar">
				Search by movie title
			</label>
			<input
				className="search__input"
				id="scbar"
				type="text"
				value={param}
				onChange={handleSearchParam}
			/>
		</form>
	);
}
