<script setup>
const isAbout = useAbout();
const toggleAbout = useToggle(isAbout);
watchEffect(() => {
  console.log(isAbout.value);
})

</script>
<template>
    <button @click="toggleAbout()">About</button>
</template>
<style scoped>

</style>