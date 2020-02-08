import React, { useState } from "react";
import PropTypes from "prop-types";

import "./style.scss";

import FilmList from "../../components/FilmList";
import Loading from "../../components/Loading";

export default function Home({ error, films, loading }) {
	if (error) return <h1>Could not find any result</h1>;

	if (loading) return <Loading />;

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
