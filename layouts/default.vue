<script setup>
onMounted(() => {
  initViewport()
})
</script>

<template>
  <main>
    <UiHeader />
    <slot />
    <UiFooter />
  </main>
</template>

<style lang="postcss" scoped></style>
