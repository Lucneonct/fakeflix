<template>
  <v-text-field
    name="name"
    :label="label"
    id="id"
    flat
    v-model="value"
    variant="outlined"
    prepend-inner-icon="mdi-search"
    color="grey-darken-2"
    :error-messages="error"
    :disabled="loading"
    :loading="loading"
  ></v-text-field>
</template>

<script setup lang="ts">
import { isEmpty } from 'lodash';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>