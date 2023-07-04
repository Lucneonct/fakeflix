<template>
  <h1>{{ store.message }}</h1>
</template>

<script lang="ts" setup>
import { useFilmsStore } from '@/stores/FilmsStore';

const store = useFilmsStore();
definePageMeta({
  middleware: 'authenticated'
})
</script>
