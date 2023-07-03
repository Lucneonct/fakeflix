<template>
  <h1>Sign Up</h1>
  <p class="text-medium-emphasis">Enter your details to get started</p>

  <VForm @submit.prevent="submit" class="mt-7">
    <div class="mt-1">
      <label class="label text-grey-darken-2" for="email">Email</label>
      <VTextField
        v-model="credentials.email"
        type="email"
        :rules="[ruleRequired, ruleEmail]"
        prepend-inner-icon="fluent:mail-24-regular"
        id="email"
        name="email"
      />
    </div>
    <div class="mt-1">
      <label class="label text-grey-darken-2" for="password">Password</label>
      <VTextField
        :type="passwordType"
        :rules="[ruleRequired, rulePassLen]"
        v-model="credentials.password"
        :append-inner-icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
        @click:append-inner="togglePasswordVisibility"
        prepend-inner-icon="fluent:password-20-regular"
        id="password"
        name="password"
      />
    </div>
    <div class="mt-5">
      <VAlert
        :text="errorMessage"
        v-if="errorMessage"
        class="text-body-2"
        color="red"
        closable
        variant="tonal"
      />
      <VBtn :loading="loading" type="submit" block min-height="45" class="gradient primary mt-1"
        >Create Account</VBtn
      >
    </div>
  </VForm>
  <p class="text-body-2 mt-10">
    <span
      >Already have an account?
      <NuxtLink to="/" class="font-weight-bold text-primary">Sign In</NuxtLink></span
    >
  </p>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["unauthenticated"],
  layout: "auth",
});
/** Connection to supabase */
const supaAuth = useSupabaseAuthClient().auth;

const credentials = reactive({
  email: "",
  password: "",
});

let loading = ref(false);
let errorMessage = ref("");
let showPassword = ref(false);

const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

/** METHODS */
/**
 * Registration method with supabase
 */
function togglePasswordVisibility() {
  showPassword.value = !showPassword.value;
}
async function submit() {
  loading.value = true;
  errorMessage.value = "";
  const { error } = await supaAuth.signUp(credentials);

  if (error) {
    loading.value = false;
    errorMessage.value = error.message;
  } else {
    return navigateTo("/");
  }
}

/** GETTERS */
const passwordType = computed(() => (showPassword.value ? "text" : "password"));
</script>
