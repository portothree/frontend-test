import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FilmCard from "../src/components/FilmCard";

const film = {
	Title: "The Avengers",
	Year: "2012",
	imdbID: "tt0848228",
	Type: "movie",
	Poster:
		"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
};

afterEach(cleanup);

it("renders without crashing", () => {
	const div = document.createElement("div");

	ReactDOM.render(
		<MemoryRouter>
			<FilmCard film={film} />
		</MemoryRouter>,
		div
	);
});

it("renders card correctly", () => {
	const { getByTestId } = render(
		<MemoryRouter>
			<FilmCard film={film} />
		</MemoryRouter>
	);

	expect(getByTestId("card")).toHaveTextContent("The Avengers");
});
