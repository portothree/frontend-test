import React, { useState } from "react";
import { Router } from "react-router";

import "./styles/base/global.css";

import Routes from "./routes";

import history from "./history";

import Header from "./components/Header";

function App() {
	const [param, setParam] = useState("");
	const [loading, setLoading] = useState(false);
	const [films, setFilms] = useState([]);
	const [errors, setErrors] = useState({});

	const handleSearchParam = e => {
		setParam(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		history.push("/");
		setLoading(true);

		const response = await fetch(
			`http://www.omdbapi.com/?apikey=1fa629b7&s=${param}`
		);

		response
			.json()
			.then(res => {
				if (res.Search) setFilms(res.Search);
			})
			.catch(err => setErrors(err));

		setLoading(false);
	};

	return (
		<Router history={history}>
			<Header
				param={param}
				handleSearchParam={handleSearchParam}
				handleSubmit={handleSubmit}
			/>
			<Routes films={films} loading={loading} />
		</Router>
	);
}

export default App;
