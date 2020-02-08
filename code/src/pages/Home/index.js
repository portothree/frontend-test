import React, { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

import FilmList from "../../components/FilmList";

export default function Home({ error, films }) {
	if (error) return <h1>Cant find films</h1>;

	if (films.length === 0) {
		return <h1 className="home__initial">Find over 280,00 movies</h1>;
	}

	return (
		<main>
			<FilmList films={films} />
		</main>
	);
}

Home.propTypes = {
	films: PropTypes.array
};
