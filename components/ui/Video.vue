<script setup>
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

const props = defineProps({
    section: { Type: Object, required: true }
});

const playerEl = ref();

onMounted(() => {
    const player = new Plyr(playerEl.value);
    window.player = player.value;
})

</script>
  
<template>
    <div class="block-container">
        <div class="video-container">
            <div class="video-wrapper plyr__video-embed" ref="playerEl">
                <iframe class="video" :src="props.section.url" allowfullscreen allowtransparency></iframe>
            </div>
            <figcaption v-html="props.section.videoLabel"></figcaption>
        </div>
    </div>
</template>
<style scoped>

.block-container {
    width: 100%;
    display: flex;
    justify-content: center;
}
.video-container {
    padding: var(--space-xxs);
    margin-bottom: var(--space-xs);
    width: 100%;
    @media(--m){
        padding: var(--space-m);
        margin-bottom: var(--space-m);
        width: 45%;
        max-width: 600px;
    }
}
</style>