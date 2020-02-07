import React from "react";

import "./style.scss";

import FilmCard from "../FilmCard";

export default function FilmList({ films }) {
	return (
		<section>
			<ul className="filmlist">
				{films.map(film => (
					<FilmCard key={film.imdbID} film={film} />
				))}
			</ul>
		</section>
	);
}
