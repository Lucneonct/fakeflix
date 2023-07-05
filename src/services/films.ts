import { IOMDBItem, IOMDBSearchResponse, TOMDBFullItemResponse } from "@/types/omdb";
import { IFetchFilmsOptions } from "@/types/films";

/**
 * Search the full body of the film for the detailed page
 * @param id The imdbID of the film
 * @returns 
 */
export async function fetchFilmsById(id: string) {
  const { data } = await useFetch<TOMDBFullItemResponse>(`/api/films/${id}`);

  return data.value;
}

const emptySearchResponse = {
  items: [],
  total: 0
};

/**
 * Return an object with the searched items and pages
 * @param name Name of media that you want to search
 * @param type The type of media
 * @returns 
 */
export async function fetchFilmsByName(name: string, type: "series" | "movie", options: IFetchFilmsOptions = {}): Promise<{ items: IOMDBItem[]; total: number; }> {
  const { page }  =options;
  const { data } = await useFetch<IOMDBSearchResponse>(`/api/films`, {
    params: {
      s: name.trim(),
      type,
      page
    }
  });

  if (!data.value) {
    return emptySearchResponse
  }
  const films = data.value;
  if (films.Response === "False" || films.Search === "False") return emptySearchResponse;

  return {
    items: films.Search,
    total: parseInt(films.totalResults)
  };
}