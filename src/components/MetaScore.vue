<template>
  <a :href="`https://www.imdb.com/title/${imdbID}/criticreviews`">
    <v-container class="d-flex align-center pa-0">
      <div id="metascore-square">{{ value }}</div>
      <div class="ml-2">Metascore</div>
    </v-container>
  </a>
</template>

<script setup lang="ts">
defineProps({
  value: {
    type: String,
    required: true,
  },
  imdbID: {
    type: String,
    required: true,
  },
});
</script>
