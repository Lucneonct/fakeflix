<template>
  {{ media }}
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

import { isNull, isUndefined } from "lodash";
import { TOMDBFullItemResponse } from "@/types/omdb";
import { fetchFilmsById } from "../../services/films";

const route = useRoute();
const media = ref<TOMDBFullItemResponse>()

/** ID from params */
const id = route.params.id as string;

try {
  const data = await fetchFilmsById(id);

  if(!isNull(data)) {
    media.value = data;
  }
} catch(e) {
  alert(e);
  navigateTo("/");
}

</script>
