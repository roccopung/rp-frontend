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
    videoData: { type: Object, required: false },
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
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false
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
                    <NuxtImg format="webp" :src="$urlFor(image.itemUrl).auto('format').url()" alt="Project Image" preload />
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
    background-color: var(--color-black);
}

.swiper-wrapper {
    height: 80svh;
    display: flex;
    align-items: center;
    justify-items: center;

    @media (--m) {
        height: calc(100svh - 51px);
        min-height: none;
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
    object-fit: contain;

    @media(--m) {
        padding-left: var(--space-l);
        padding-right: var(--space-l);
    }
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
    width: 14px;

    @media(--m) {
        width: auto;
    }
}

.swiper-btn-prev {
    left: var(--space-s);
    width: 14px;

    @media(--m) {
        width: auto;
    }
}

.swiper-btn-next.swiper-button-disabled,
.swiper-btn-prev.swiper-button-disabled {
    opacity: 0;
}
</style>