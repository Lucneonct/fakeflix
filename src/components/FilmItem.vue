<template>
  <v-skeleton-loader
    v-if="isUndefined(item) || loading"
    class="mx-auto border d-block h-100"
  ></v-skeleton-loader>
  <NuxtLink v-else variant="outlined" :to="`/item/${item.imdbID}`">
    <v-card
      variant="outlined"
      class="item-container pa-1 d-flex relative items-center"
      style="height: 100%"
    >
      <v-img :src="getImage" :style="`view-transition-name: image-${item.imdbID}`"> </v-img>
      <div class="overlay-description">
        <v-container>
          <div class="text-h6 text-center">{{ item.Title }}</div>
        </v-container>
        <v-container class="text-body-2 text-center">
          <div class="text-subtitle-2 text-center text-primary">{{ item.Year }}</div>
        </v-container>
      </div>
    </v-card>
  </NuxtLink>
</template>

<script setup lang="ts">
import { isUndefined } from "lodash";
import { IOMDBItem } from "@/types/omdb";
import fallbackImage from "@/assets/default.png";

const props = defineProps({
  item: {
    type: Object as PropType<IOMDBItem>,
  },
  loading: {
    type: Object as PropType<IOMDBItem>,
    default: false,
  },
});

const getImage = computed(() => {
  if(props.item?.Poster !== "N/A") {
    return props.item?.Poster
  }

  return fallbackImage;
});
</script>
