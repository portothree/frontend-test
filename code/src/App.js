import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/base/global.css";

import Routes from "./routes";

import Header from "./components/Header";

function App() {
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
			.then(res => {
				if (res.Search) setFilms(res.Search);
			})
			.catch(err => setErrors(err));
	};

	return (
		<Router>
			<Header
				param={param}
				handleSearchParam={handleSearchParam}
				handleSubmit={handleSubmit}
			/>
			<Routes films={films} />
		</Router>
	);
}

export default App;
