<script setup>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const swiper = ref();
const swiperEl = ref();

const props = defineProps({
    section: { Type: Object, required: true }
});

onMounted(() => {
    swiper.value = new Swiper(swiperEl.value, {
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: false,
    });
});

onUnmounted(() => {
    swiper.value?.destroy?.();
});

</script>
  
<template>
    <div ref="swiperEl" class="swiper">
        <div class="swiper-wrapper" :class="{ stacked : props.section.display == 'stacked', inline : props.section.display == 'inline', carousel : props.section.display == 'carousel' }">
            <div class="swiper-slide" v-for="(image, i) in props.section.images" :key="i">
                <NuxtImg class="image" format="webp" :src="$urlFor(image.asset).url()" :alt="image.alt" preload />
            </div>
        </div>
    </div>
</template>
<style scoped>
.swiper {
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
}

.swiper-wrapper {
    display: flex;
    justify-content: center;
}

.stacked {
    flex-wrap: wrap;
}

.inline {
    flex-wrap: nowrap;
}

.swiper-slide, .swiper-slide-active {
    width: fit-content;
    padding: var(--space-2xs) 0 var(--space-2xs) 0;
    display: flex;
    justify-content: center;
    margin: 0!important;
}

.swiper-slide img {
    display: block;
    width: fit-content;
    padding: 0 var(--space-2xs);
    max-height: 80svh;
    @media(--m){
        max-width: 100%;
        height: 70svh;
        max-height: 400px;
    }
}


</style>