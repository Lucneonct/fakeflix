<template>
  <v-container>
    <v-row class="mt-10">
      <v-col>
        <search-input
          :loading="store.searching"
          :error="error"
          v-model="getSearch"
          label="Search film, movie, chapter"
        />
        <header v-if="store.search" class="mt-8 text-h5">
          {{ store.getTotalResults }} results for "{{ store.search }}"
        </header>

        <v-container v-if="store.search">
          <!-- FILMS SECTION -->
          <media-gallery
            :loading="store.searching"
            :resource="store.filmsResources"
            @update="changeFilmsPageDelayed"
          />

          <!-- SERIES SECTION -->
          <media-gallery
            :loading="store.searching"
            :resource="store.seriesResources"
            @update="changeSeriesPageDelayed"
          />
        </v-container>
        <v-container v-else>
          <header class="py-10 text-h4 text-center">Type something to search</header>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { useFilmsStore } from "@/stores/FilmsStore";
import { debounce } from "lodash";

const store = useFilmsStore();
definePageMeta({
  middleware: "authenticated",
});

const value = ref("");
const error = ref("");

const setSearchDelayed = debounce(function (val: string) {
  if (val.length >= 3) {
    error.value = "";
    store.setSearch(val.trim());
  } else {
    error.value = "Must have at least 3 letters";
  }
}, 500);

const changeFilmsPageDelayed = debounce(function (page: number) {
  store.setPage(page, "filmsResources");
}, 300);

const changeSeriesPageDelayed = debounce(function (page: number) {
  store.setPage(page, "seriesResources");
}, 300);

// GETTERS

const getSearch = computed({
  get() {
    return value.value;
  },

  set(val: string) {
    value.value = val;
    setSearchDelayed(val);
  },
});
</script>
