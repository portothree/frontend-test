import React, { useState, useEffect } from "react";

import "./style.scss";

export default function FilmPage({ match }) {
	const { imdbID } = match.params;

	const [film, setFilm] = useState({});
	const [errors, setErrors] = useState({});

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				`http://www.omdbapi.com/?apikey=1fa629b7&i=${imdbID}`
			);

			response
				.json()
				.then(res => setFilm(res))
				.catch(err => setErrors(err));
		}

		fetchData();
	}, []);

	const convertStringToArr = data => {
		return String(data).split(",");
	};

	const actors = convertStringToArr(film.Actors);
	const genres = convertStringToArr(film.Genre);
	const directors = convertStringToArr(film.Director);

	return (
		<main className="filmpage">
			<img
				className="filmpage__poster"
				loading="lazy"
				src={film.Poster}
				alt={`Poster of ${film.Title} from ${film.Year}`}
			/>
			<div className="filmpage__info">
				<h1 data-testid="filmt">{film.Title}</h1>
				<h2>Plot</h2>

				<p className="filmpage__plot">{film.Plot}</p>

				<div className="filmpage__details">
					<div className="filmpage__detail">
						<h3>Cast</h3>
						<ul className="filmpage__list">
							{actors.map((actor, index) => (
								<li key={index}>{actor}</li>
							))}
						</ul>
					</div>

					<div className="filmpage__detail">
						<h3>Genre</h3>
						<ul className="filmpage__list">
							{genres.map((genre, index) => (
								<li key={index}>{genre}</li>
							))}
						</ul>
					</div>

					<div className="filmpage__detail">
						<h3>Directors</h3>
						<ul className="filmpage__list">
							{directors.map((director, index) => (
								<li key={index}>{director}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
