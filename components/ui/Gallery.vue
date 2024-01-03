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
        <div class="swiper-wrapper">
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

.swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 70svw;
    object-fit: cover;

    @media(--m) {
        width: fit-content;
        height: 400px;
    }
}

.swiper-slide {
    width: fit-content;
}
</style>