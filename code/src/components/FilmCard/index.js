import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./style.scss";

export default function FilmCard({ film }) {
	return (
		<li data-testid="card" className="filmcard">
			<Link className="filmcard__link" to={`/film/${film.imdbID}`}>
				<strong className="filmcard__title">{film.Title}</strong>
				<img
					className="filmcard__cover"
					loading="lazy"
					src={film.Poster}
					alt={`Poster of ${film.Title} from ${film.Year}`}
				/>
			</Link>
		</li>
	);
}

FilmCard.propTypes = {
	films: PropTypes.array
};
