<template>
  <v-app-bar color="grey-darken-4" class="overflow-visible">
    <v-app-bar-title>
      <nuxt-link to="/" class="float-left">
        <v-img :src="logo" width="130" />
      </nuxt-link>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-menu offset="5" :contained="true" transition="slide-y-transition" location="start" internal-activator :close-on-content-click="false">
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
</script>
