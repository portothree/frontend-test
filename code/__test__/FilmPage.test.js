import React from "react";
import { render } from "@testing-library/react";
import { FetchMock } from "@react-mock/fetch";
import "@testing-library/jest-dom/extend-expect";

import FilmPage from "../src/pages/FilmPage";

const film = {
	Title: "The Avengers",
	Year: "2012",
	Rated: "PG-13",
	Released: "04 May 2012",
	Runtime: "143 min",
	Genre: "Action, Adventure, Sci-Fi",
	Director: "Joss Whedon",
	Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",
	Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
	Plot:
		"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
	Language: "English, Russian, Hindi",
	Country: "USA",
	Awards: "Nominated for 1 Oscar. Another 38 wins & 79 nominations.",
	Poster:
		"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
	Ratings: [
		{ Source: "Internet Movie Database", Value: "8.0/10" },
		{ Source: "Rotten Tomatoes", Value: "91%" },
		{ Source: "Metacritic", Value: "69/100" }
	],
	Metascore: "69",
	imdbRating: "8.0",
	imdbVotes: "1,213,103",
	imdbID: "tt0848228",
	Type: "movie",
	DVD: "25 Sep 2012",
	BoxOffice: "$623,279,547",
	Production: "Walt Disney Pictures",
	Website: "N/A",
	Response: "True"
};

const match = {
	params: {
		imdbID: "tt0848228"
	}
};

const renderFilmPage = () => {
	return render(
		<FetchMock
			matcher={`http://www.omdbapi.com/?apikey=1fa629b7&i=${match.params.imdbID}`}
			response={film}
		>
			<FilmPage match={match} />
		</FetchMock>
	);
};

test("should render data", async () => {
	const { getByTestId } = renderFilmPage();

	const titleValue = await getByTestId("filmt");

	expect(titleValue).toHaveTextContent("The Avengers");
}, 2000);
