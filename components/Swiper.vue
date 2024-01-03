<script setup>
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';



const swiper = ref();
const swiperEl = ref();
const nextEl = ref();
const prevEl = ref();

const props = defineProps({
    swiperData: { type: Array, required: false },
    videoData: { type: Object, required: false }
});

const videoSource = props.videoData?.url;

onMounted(() => {

    if (props.swiperData || props.videoData) {
        swiper.value = new Swiper(swiperEl.value, {
            modules: [Navigation],
            loop: true,
            navigation: {
                nextEl: nextEl.value,
                prevEl: prevEl.value,
            }
        });
    }
    
    
});

onUnmounted(() => {
    swiper.value?.destroy?.();
});

</script>
<template>
    <div>
        <div ref="swiperEl" class="swiper">
            <div v-if="props.swiperData.length || props.videoData" class="swiper-wrapper">
                <div v-if="props.videoData" class="swiper-slide">
                    <Plyr :videoSource="videoSource" />
                </div>
                <div class="swiper-slide" v-for="(image, i) in props.swiperData" :key="i">
                    <NuxtImg format="webp" :src="$urlFor(image.itemUrl).url()" alt="Project Image" preload />
                </div>
            </div>
            <div v-else class="swiper-slide"></div>
            <div ref="prevEl" class="swiper-btn-prev">
                <img src="/icons/galleryArrow.svg" alt="" />
            </div>
            <div ref="nextEl" class="swiper-btn-next">
                <img src="/icons/galleryArrow.svg" alt="" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-wrapper {
    height: 100%;
    min-height: 50vh;
    background-color: var(--color-black);
    display: flex;
    align-items: center;
    justify-items: center;

    @media (--m) {
        height: calc(100vh - 84px);
    }
}

.swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-btn-next,
.swiper-btn-prev {
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    cursor: pointer;
}

.swiper-btn-next {
    right: var(--space-s);
    transform: rotate(180deg);
}

.swiper-btn-prev {
    left: var(--space-s);
}
</style>