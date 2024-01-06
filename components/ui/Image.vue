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
    max-width: 100%;
    @media(--m){
        max-width: 520px;
    }
    @media(--xl){
        max-width: 50%;
    }
}

.image {
    padding-bottom: var(--space-xs);
}

img {
    width: 100%;
}


/* .image {
    max-width: 100%;
    padding-bottom: var(--space-xs);
    @media(--l) {
        max-height: 500px;
    }
} */

figcaption {
    opacity: 0.4;
}
</style>