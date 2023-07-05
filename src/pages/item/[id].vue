<template>
  <div v-if="media" id="backgound-poster" :style="{ backgroundImage: `url(${media.Poster})` }">
    <div />
  </div>
  <v-container v-if="media" class="mt-md-10 z-10" style="position: relative">
    <v-row>
      <v-col cols="12" md="4" xl="3">
        <!-- HEADER IMAGE  -->
        <v-card class="pa-2 mx-16 mx-md-auto" variant="outlined" elevation="3">
          <v-img :src="media.Poster" />
        </v-card>
      </v-col>
      <v-col cols="12" md="8" xl="9" class="pl-0 mt-10 pl-md-10 pl-xl-20">
        <v-container>
          <div>
            <div class="text-h4">
              <!-- TITLE  -->
              {{ media.Title }}
            </div>
            <!-- YEAR  -->
            <v-row>
              <v-col class="d-flex">
                <div class="text-body-1 text-grey text-thin">{{ media.Type.toUpperCase() }}</div>
                <div class="text-body-1 ml-2 text-grey text-thin">({{ media.Year }})</div>
              </v-col>
              <v-col class="d-flex justify-end pa-0 px-0 align-center">
                <IMDBRating :imdbID="media.imdbID" :value="media.imdbRating" compact />
              </v-col>
            </v-row>
          </div>
          <v-divider class="border-opacity-25 mt-2"></v-divider>
          <v-row>
            <v-col>
              <!-- GENRES  -->
              <p class="text-primary text-subtitle-2"><b>Genres:</b> {{ media.Genre }}</p>
            </v-col>
          </v-row>
          <v-row>
            <!-- FILM INFO -->
            <v-col cols="12" lg="7">
              <!-- DESCRIPTION  -->
              <div class="mt-4">
                <div class="text-h5 mb-2">Description:</div>
                <p class="text-body2">{{ media.Plot }}</p>
              </div>

              <v-divider class="my-6"></v-divider>

              <!-- Ratings -->
              <div class="mt-4">
                <div class="text-h5 mb-2">Ratings:</div>
                <!-- Metascore -->
                <meta-score
                  v-if="media.Metascore"
                  :imdbID="media.imdbID"
                  :value="media.Metascore"
                />
                <IMDBRating :imdbID="media.imdbID" :value="media.imdbRating" />

                <div v-if="isEmpty(media.Ratings)">
                  <div class="text-heading-5 my-5">Others</div>
                  <detail-item
                    v-for="item in media.Ratings"
                    :item="{
                      name: item.Source,
                      value: item.Value,
                    }"
                  />
                </div>
              </div>
            </v-col>

            <!-- DETAILED ITEMS  -->
            <v-col cols="12" lg="5">
              <v-container class="border-left-1">
                <detail-item v-for="item in getDetailItems" :item="item" />
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["authenticated"],
  validate: (route) => {
    const { id } = route.params;
    if (isUndefined(id) || id.length < 5) {
      return false;
    }

    return true;
  },
});

import { isNull, isUndefined, isEmpty } from "lodash";
import { TOMDBFullItemResponse } from "@/types/omdb";
import { fetchFilmsById } from "../../services/films";
import { getDetailsList } from "@/utils/films";

const route = useRoute();
const media = ref<TOMDBFullItemResponse>();

/** ID from params */
const id = route.params.id as string;

/** GETTERS */
const getDetailItems = computed(() => {
  if (media.value) {
    return getDetailsList(media.value);
  }

  return [];
});

try {
  const data = await fetchFilmsById(id);

  if (!isNull(data)) {
    media.value = data;
  } else {
    navigateTo("/");
  }
} catch (e) {
  alert(e);
  navigateTo("/");
}
</script>
