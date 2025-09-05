<script setup>
defineProps({
  error: Object,
});
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>Page not found or an error occurred.</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
