<template>
  <a target="_blank" :href="`https://www.imdb.com/title/${imdbID}/ratings`">
    <v-container class="d-flex align-center pa-0">
      <v-rating :size="compact ? 'x-small' : 'inherit'"  v-model="getRatings" readonly color="primary"></v-rating>
      <p v-if="!compact" class="ml-2"
        >{{ value }} / 10</p>
    </v-container>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  imdbID: {
    type: String,
    required: true,
  },
  compact: {
    type: Boolean,
    default: false,
  },
});

const getRatings = computed(() => {
  if (props.value) {
    return parseFloat(props.value) / 2;
  } else return 0;
});
</script>
