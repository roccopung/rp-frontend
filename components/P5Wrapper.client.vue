<script setup lang="ts">
const props = defineProps(["sketch"])
const sketch = props.sketch
</script>
<template>
  <P5 :sketch="sketch" />
</template>
<style scoped></style>