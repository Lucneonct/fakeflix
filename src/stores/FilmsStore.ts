import { IOMDBItem } from "@/types/omdb";
import { fetchFilmsByName } from "@/services/films";

export const useFilmsStore = defineStore('films', {
  state: () => ({
    search: '',
    searching: false,
    filmsResources: {
      name: "Movies",
      items: [] as IOMDBItem[],
      total: 0,
      page: 1,
    },
    seriesResources: {
      name: "Series",
      items: [] as IOMDBItem[],
      total: 0,
      page: 1,
    }
  }),
  actions: {
    /**
     * Save the search from the main page input
     * @param value Input for search
     */
    async setSearch(value: string) {
      this.search = value;
      this.searching = true;
      this.filmsResources.page = 1;
      this.seriesResources.page = 1;

      // Fetching
      await Promise.all([        
        this.refreshFilmsSearch(),
        this.refreshSeriesSearch()
      ]);
      this.searching = false;
    },

    /**
     * Save the current page of resource
     * @param value Input for search
     */
    async setPage(value: number, resourceName: "filmsResources" | "seriesResources") {
      this[resourceName].page = value;
      this.searching = true;

      // Fetching
      await Promise.all([        
        this.refreshFilmsSearch(),
        this.refreshSeriesSearch()
      ]);
      this.searching = false;
    },

    /**
     * Reset the films search with the new search or forcing it again
     * @returns 
     */
    async refreshFilmsSearch() {
      let search = this.search;

      if (search.length < 3) {
        return;
      }

      try {
        // Films section
        const films = await fetchFilmsByName(this.search, "movie", {
          page: this.filmsResources.page
        });

        this.filmsResources.items = films.items;
        this.filmsResources.total = films.total;

      } catch (e) {
        console.error(e);
      }
    },

    /**
     * Reset the series search with the new search or forcing it again
     * @returns 
     */
    async refreshSeriesSearch() {
      let search = this.search;

      if (search.length < 3) {
        return;
      }

      try {
        // Series section
        const series = await fetchFilmsByName(this.search, "series", {
          page: this.seriesResources.page
        });

        this.seriesResources.items = series.items;
        this.seriesResources.total = series.total;
      } catch (e) {
        console.error(e);
      }
    }
  },
  getters: {
    getFilmsTotalPages(): number {
      return calculateTotalPages(this.filmsResources.total);
    },
    getSeriesTotalPages(): number {
      return calculateTotalPages(this.seriesResources.total);
    },
    getTotalResults(): number {
      return this.seriesResources.total + this.filmsResources.total;
    }
  }
})