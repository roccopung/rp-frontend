<script setup>
const props = defineProps({
  error: Object,
})

const route = useRoute();

const goBack = () => {
  const router = useRouter();
  router.push('/');
}

</script>

<template>
  <NuxtLayout>
    <h2>{{ error.statusCode }}</h2>
    <div>page not found: {{ route.fullPath }}</div>
    <button @click="goBack">Go back to site</button>
  </NuxtLayout>
</template>
