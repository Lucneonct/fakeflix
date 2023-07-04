<template>
  <NuxtPage />
  {{ filmsStore.message }}
</template>

<script setup lang="ts">
import { useFilmsStore } from "store/films";

const filmsStore = useFilmsStore();
</script>
