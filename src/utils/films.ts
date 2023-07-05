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
    if(availableDetailItemKeys.includes(key as keyof EAvailableDetailItemKeys)) {
      items.push({
        name: key,
        value: item[key as keyof typeof EAvailableDetailItemKeys]
      })
    }
  })
  return items;
}