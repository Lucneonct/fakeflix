<template>
  <v-card min-width="300">
    <v-list>
      <v-list-item
        prepend-avatar="https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/50/1449498579-darth-vader-star-wars.jpg"
        title="John Doe"
        subtitle="I love films"
      >
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item>
        <v-btn
          prepend-icon="mdi-exit-to-app"
          color="red"
          variant="outlined"
          block
          :loading="loading"
          @click="logOut"
          >Log Out</v-btn
        >
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
const { auth } = useSupabaseAuthClient();
let loading = ref(false);

/**
 * Close the user sessions
 */
const logOut = async () => {
  const { error } = await auth.signOut();
  loading.value = true;

  if (error) {
    alert(error.message);
  } else {
    return navigateTo("/login");
  }
};
</script>
