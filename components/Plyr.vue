<script setup>
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
const playerEl = ref();
const props = defineProps({
    videoSource: { type: String, required: true },
});

onMounted(() => {
    const player = new Plyr(playerEl.value);
    window.player = player.value;
})
</script>
<template>
    <div class="video-container">
        <div class="video-wrapper plyr__video-embed" ref="playerEl">
            <iframe class="video" :src="props.videoSource" allowfullscreen allowtransparency></iframe>
        </div>
    </div>
</template>
<style scoped>
.video-container {
    width: 100%;
    background-color: var(--color-black);
    position: relative;
    max-width: 800px;
    overflow: hidden;
}

.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.plyr {
    --plyr-color-main: var(--color-acid-green);
    --plyr-video-control-color: var(--color-primary-light);
    --plyr-video-controls-background: transparent;

    @media(--m) {
        padding: var(--space-xs);
        border-radius: var(--space-xs);
    }
}
</style>