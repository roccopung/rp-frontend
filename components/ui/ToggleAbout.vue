<script setup>
const isAbout = useAbout();
const toggleAbout = useToggle(isAbout);

</script>
<template>
    <button @click="toggleAbout()">About me</button>
</template>
<style scoped>

</style>