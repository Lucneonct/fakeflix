export interface IFilmItem {
  name: string;
  value: string;
}

export interface IFetchFilmsOptions {
  page?: number;
}

export enum EAvailableDetailItemKeys {
  "Rated",
  "Released",
  "Runtime",
  "Director",
  "Writer",
  "Actors",
  "Language",
  "Country",
  "totalSeasons"
}