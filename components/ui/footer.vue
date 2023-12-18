<script setup>



</script>

<template>
    <footer class="footer typo--s">
        <NuxtLink to="/">Go to main page</NuxtLink>
        <NuxtLink to="#">About</NuxtLink>
    </footer>
</template>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: var(--color-white);
    display: flex;
    gap: 40px;
}

.footer>* {
    padding: var(--space-xs);
}
</style>
