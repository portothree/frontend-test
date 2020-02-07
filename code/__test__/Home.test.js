import React from "react";
import { render } from "@testing-library/react";
import { FetchMock } from "@react-mock/fetch";

import Home from "../src/pages/Home";

const search = [
	{
		Title: "The Avengers",
		Year: "2012",
		imdbID: "tt0848228",
		Type: "movie",
		Poster:
			"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
	}
];

const renderHome = () => {
	return render(
		<FetchMock
			matcher="http://www.omdbapi.com/?apikey=1fa629b7&s=The%20Avengers"
			response={search}
		>
			<Home />
		</FetchMock>
	);
};

test("should render data", async () => {
	const { findByRole } = renderHome();

	// I have used await here because
	// this method returns a Promise
	const filmList = await findByRole("list");
	expect(filmList.children.length).toEqual(search.length);
}, 20000);
