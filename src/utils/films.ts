import { EAvailableDetailItemKeys, IFilmItem } from "@/types/films";
import { TOMDBFullItemResponse } from "@/types/omdb";

const availableDetailItemKeys = Object.values(EAvailableDetailItemKeys)

/**
 * Return a list of items for display on film item
 * @param item - Full Detailed item
 * @returns 
 */
export const getDetailsList = (item: TOMDBFullItemResponse): IFilmItem[] => {
  let items: IFilmItem[] = [];

  Object.keys(item).forEach((key) => {
    let actualKey = key as keyof typeof EAvailableDetailItemKeys;
    if(availableDetailItemKeys.includes(actualKey)) {
      items.push({
        name: key,
        value: item[actualKey] || ""
      })
    }
  })
  return items;
}

export const calculateTotalPages = (count: number): number => {
  if(count === 0) return 0;
  return Math.ceil(count / 10);
}