<template>
  <div class="font-weight-bold text-subtitle-2">{{ item.name }}</div>
  <div class="text-subtitle-2 text-grey pl-4">{{ item.value }}</div>
</template>

<script setup lang="ts">
import { IFilmItem } from '@/types/films';

  defineProps({
    item: {
      type: Object as PropType<IFilmItem>,
      required: true,
    }
  })
</script>