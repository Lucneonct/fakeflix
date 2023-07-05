<template>
  <v-container class="d-flex flex-column justify-center align-center" style="height: 100vh">
    <v-row class="d-flex flex-row justify-center align-content-center">
      <VCol cols="12" class="mb-6 flex-grow-0 align-center justify-center flex-shrink-1 justify-center d-flex basis-0">
        <VImg :src="image" height="85" width="200"></VImg>
      </VCol>
      <VCol cols="12" class="d-flex flex-grow-0 align-center justify-center flex-shrink-1 basis-0">
        <v-card
          max-width="400"
          class="d-flex flex-column text-center py-4 px-10 flex-grow-0 flex-shrink-0 justify-center "
          style="gap: 20px"
        >
          <h1 v-if="error.statusCode === 404">Page not found</h1>
          <h1 v-else>An error occurred - {{ error.statusCode }}</h1>
          <h4>{{ error.message }}</h4>
          <NuxtLink to="/"><v-btn color="primary">Home page</v-btn></NuxtLink>
        </v-card>
      </VCol>
    </v-row>
  </v-container>
</template>

<script setup>
import image from "@/assets/logo.png";
const props = defineProps({
  error: Object,
});
</script>
