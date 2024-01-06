<script setup>
const isAbout = useAbout();
const toggleAbout = useToggle(isAbout);

</script>
<template>
    <button @click="toggleAbout()">About</button>
</template>
<style scoped>

</style>