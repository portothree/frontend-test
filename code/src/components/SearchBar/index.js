import React from "react";

import "./style.scss";

export default function SearchBar({ param, handleSearchParam, handleSubmit }) {
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
