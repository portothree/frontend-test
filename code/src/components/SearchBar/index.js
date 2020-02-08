import React from "react";
import PropTypes from "prop-types";

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
			<button className="search__submit-btn" aria-label="Search"></button>
		</form>
	);
}

SearchBar.propTypes = {
	param: PropTypes.string,
	handleSearchParam: PropTypes.func,
	handleSubmit: PropTypes.func
};
