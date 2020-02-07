import React from "react";

import "./style.scss";
import logo from "../../assets/images/diamond.png";

import SearchBar from "../SearchBar";

export default function Header() {
	return (
		<header className="header">
			<img className="header__logo" src={logo} alt="Diamond" />
			<SearchBar />
		</header>
	);
}
