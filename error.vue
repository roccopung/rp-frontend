<script setup>
const props = defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })

</script>

<template>
  <NuxtLayout>
    <h2>{{ error.statusCode }}</h2>
    <button @click="handleError">Go back to site</button>
  </NuxtLayout>
</template>
