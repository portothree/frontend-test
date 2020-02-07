import React, { useState } from "react";

import "./style.scss";

import FilmList from "../../components/FilmList";
import SearchBar from "../../components/SearchBar";
import logo from "../../assets/images/diamond.png";

export default function Home() {
	const [param, setParam] = useState("");
	const [films, setFilms] = useState([]);
	const [errors, setErrors] = useState({});

	const handleSearchParam = e => {
		setParam(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		const response = await fetch(
			`http://www.omdbapi.com/?apikey=1fa629b7&s=${param}`
		);

		response
			.json()
			.then(res => setFilms(res.Search))
			.catch(err => setErrors(err));
	};

	return (
		<>
			<header className="header">
				<img className="header__logo" src={logo} alt="Diamond" />
				<SearchBar
					param={param}
					handleSearchParam={handleSearchParam}
					handleSubmit={handleSubmit}
				/>
			</header>
			<main>
				<FilmList films={films} />
			</main>
		</>
	);
}
