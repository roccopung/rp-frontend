<script setup>
const props = defineProps({
    section: { Type: Object, required: true }
});
</script>
<template>
    <div class="block-container">
        <div class="image-container">
            <NuxtImg class="image" format="webp" :src="$urlFor(props.section.asset).url()" :alt="props.section.caption" preload />
            <figcaption v-html="props.section.caption"></figcaption>
        </div>
    </div>
</template>
<style scoped>
.block-container {
    width: 100%;
    display: flex;
    justify-content: center;
}
.image-container {
    padding: var(--space-xxs);
    margin-bottom: var(--space-xs);
    @media(--m){
        padding: var(--space-m);
        margin-bottom: var(--space-m);
    }
}

.image {
    max-height: 500px;
    max-width: 700px;
}
</style>