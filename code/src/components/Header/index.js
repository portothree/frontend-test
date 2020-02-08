import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

import SearchBar from "../../components/SearchBar";

import logo from "../../assets/images/diamond.png";

export default function Header({ param, handleSearchParam, handleSubmit }) {
	return (
		<header className="header">
			<img className="header__logo" loading="lazy" src={logo} alt="Diamond" />
			<SearchBar
				param={param}
				handleSearchParam={handleSearchParam}
				handleSubmit={handleSubmit}
			/>
		</header>
	);
}

Header.propTypes = {
	param: PropTypes.string,
	handleSearchParam: PropTypes.func,
	handleSubmit: PropTypes.func
};
