<template>
  <v-app-bar color="transparent" class="overflow-visible">
    <template v-slot:prepend v-if="showBackButton">
      <nuxt-link to="/">
        <v-btn icon="mdi-arrow-left" />
      </nuxt-link>
    </template>

    <v-app-bar-title style="view-transition-name: navbar-logotipo">
      <nuxt-link to="/" class="float-left">
        <v-img :src="logo" width="130" />
      </nuxt-link>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu
      offset="5"
      :contained="true"
      transition="slide-y-transition"
      location="start"
      internal-activator
      :close-on-content-click="false"
    >
      <template #activator="{ props }">
        <v-btn icon v-bind="props" class="mr-2">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>

      <user-menu />
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
import logo from "@/assets/logo.png";
const route = useRoute();

/** GETTERS */
const showBackButton = computed(() => {
  return route.path !== "/"
})
</script>
