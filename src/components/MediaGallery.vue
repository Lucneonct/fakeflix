<template>
  <v-container>
    <v-row>
      <v-col>
        <header class="text-h6">{{ resource.name }}</header>
      </v-col>
      <v-col class="d-flex justify-end"> {{ resource.total }} reults. </v-col>
    </v-row>
    <v-divider class="mb-4"></v-divider>

    <v-container>
      <v-row v-if="!loading">
        <!-- There's data -->
        <v-col cols="6" md="4" lg="3" xl="2" v-if="resource.total" v-for="item in resource.items">
          <film-item :item="item" />
        </v-col>
        
        <!-- There's no data -->
        <v-col v-else class="text-center text-h6 font-weight-thin"> No hay resultados :( </v-col>
      </v-row>
      <v-skeleton-loader v-else />
      <v-row v-if="totalPages">
        <v-col>
          <v-divider></v-divider>
          <v-pagination v-model="getPage" :length="totalPages"></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { IOMDBItem } from "@/types/omdb";
import { calculateTotalPages } from "@/utils/films";

const props = defineProps({
  resource: {
    type: Object as PropType<{
      name: string;
      items: IOMDBItem[];
      total: number;
      page: number;
    }>,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits<{
  (e: "update", value: number): void;
}>();

// GETTERS
const getPage = computed({
  get() {
    return props.resource.page;
  },
  set(val) {
    emit("update", val);
  },
});

const totalPages = computed(() => {
  return calculateTotalPages(props.resource.total);
});
</script>
