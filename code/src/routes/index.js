import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import FilmPage from "../pages/FilmPage";

export default function Routes({ films }) {
	return (
		<Switch>
			<Route
				exact
				path="/"
				render={props => <Home {...props} films={films} />}
			/>
			<Route path="/film/:imdbID" component={FilmPage} />
		</Switch>
	);
}

Routes.propTypes = {
	films: PropTypes.array
};
