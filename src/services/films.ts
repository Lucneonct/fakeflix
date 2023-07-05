import { TOMDBFullItemResponse } from "@/types/omdb";

export async function fetchFilmsById(id: string) {
  const { data } = await useFetch<TOMDBFullItemResponse>(`/api/films/${id}`);

  return data.value;
}