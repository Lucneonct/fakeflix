<template>
  <div>
    <VApp>
      <VMain>
        <div class="background-image">
          <VContainer fluid class="fill-height">
            <VRow no-gutters align="center" justify="center" class="fill-height">
              <VCol cols="12" lg="6" xl="5" sm="6">
                <VRow no-gutters align="center" justify="center">
                  <VCol cols="12" lg="8" class="mb-6">
                    <VImg :src="image" height="85"></VImg>
                  </VCol>
                  <VCol cols="12" lg="8" style="view-transition-name: form-animation">
                    <VCard class="py-4 px-8" rounded="xl">
                      <slot />
                    </VCard>
                  </VCol>
                </VRow>
              </VCol>
            </VRow>
          </VContainer>
        </div>
      </VMain>
    </VApp>
  </div>
</template>

<script setup lang="ts">
	import image from '@/assets/logo.png';
</script>