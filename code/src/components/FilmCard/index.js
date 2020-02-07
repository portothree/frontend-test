import React from "react";

import "./style.scss";

export default function FilmCard({ film }) {
	return (
		<li data-testid="card" className="filmcard">
			<span className="filmcard__title">{film.Title}</span>
			<img
				className="filmcard__cover"
				src={film.Poster}
				alt={`Poster of ${film.Title} from ${film.Year}`}
			/>
		</li>
	);
}
