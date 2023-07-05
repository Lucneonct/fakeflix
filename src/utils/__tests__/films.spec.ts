import { IOBDMItemFull } from "types/omdb";
import { getDetailsList, calculateTotalPages } from "../films";

export const filmFullItemExample: IOBDMItemFull = {
  "Title": "Star Wars: Episode IV - A New Hope",
  "Year": "1977",
  "totalSeasons": "5",
  "Rated": "PG",
  "Released": "25 May 1977",
  "Runtime": "121 min",
  "Genre": "Action, Adventure, Fantasy",
  "Director": "George Lucas",
  "Writer": "George Lucas",
  "Actors": "Mark Hamill, Harrison Ford, Carrie Fisher",
  "Plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
  "Language": "English",
  "Country": "United States",
  "Awards": "Won 6 Oscars. 65 wins & 31 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  "Ratings": [
  {
  "Source": "Internet Movie Database",
  "Value": "8.6/10"
  },
  {
  "Source": "Rotten Tomatoes",
  "Value": "93%"
  },
  {
  "Source": "Metacritic",
  "Value": "90/100"
  }
  ],
  "Metascore": "90",
  "imdbRating": "8.6",
  "imdbVotes": "1,398,922",
  "imdbID": "tt0076759",
  "Type": "movie",
  "DVD": "06 Dec 2005",
  "BoxOffice": "$460,998,507",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}

describe("getDetailsList", () => {
  test("should response correct length", () => {
    const items = getDetailsList(filmFullItemExample);

    // Correct length
    expect(items.length).toBe(9);
  })

  test("should had correct data", () => {
    const items = getDetailsList(filmFullItemExample);

    // Correct response
    expect(items).toContainEqual({
      name: "Runtime",
      value: filmFullItemExample.Runtime
    });
  })

  test("shouldn't have ignored data", () => {
    const { totalSeasons: _, ...rest} = filmFullItemExample;
    const items = getDetailsList(rest);

    // Correct length
    expect(items.length).toBe(8);
  })
})

describe("calculateTotalPages", () => {
  test("should work with 0", () => {
    const pages = calculateTotalPages(0);

    expect(pages).toBe(0)
  })
  
  test("should show all pages", () => {
    // 11 / 10 = 1.1, must be 2 pages
    const pages = calculateTotalPages(11);

    expect(pages).toBe(2)
  })
})