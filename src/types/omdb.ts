/**
 * Item type
 */
export type TOMDBTypes = "movie" | "series" | "episode"

/**
 * Other rathings than IMDB
 */
export interface IOMDBRating {
  Source: string;
  Value: string;
}

/**
 * Short version of OMDB Item, used in searches
 */
export interface IOMDBItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: TOMDBTypes;
  Poster: string;
}

/**
 * Response structure if there's data
 */
export interface IOMDBSearchResponse {
  Search: IOMDBItem[] | "False",
  totalResults: string;
  Response?: "True" | "False";
  Error?: string;
}

/**
 * Full version of OMDB Item, used in details
 */
export interface IOBDMItemFull extends IOMDBItem {
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Ratings: IOMDBRating[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    totalSeasons: string;
    BoxOffice?: string;
    DVD?: string;
    Website?: string;
    Response: "True" | "False";
}

/**
 * Response of the full item
 */
export type TOMDBFullItemResponse = IOBDMItemFull