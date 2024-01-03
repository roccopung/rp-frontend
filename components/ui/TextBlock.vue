<script setup>
import { PortableText } from '@portabletext/vue';

const props = defineProps({
    section: { Type: Object, required: true }
});

const components = computed(() => ({
  block: {
    h2: (_, { slots }) => h('h2', { class: 'h2 typo--l-alt' }, slots.default?.()),
    p: (_, { slots }) => h('p', { class: 'typo--l' }, slots.default?.()),
  }
}));

</script>
<template>
    <div class="textBlock-container" >
        <div class="textBlock">
            <PortableText :value="props.section.TextBlock" :components="components"/>
        </div>
    </div>
</template>
<style scoped>

.textBlock-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: var(--space-l) 0 var(--space-l) 0;
}

.textBlock {
    width: 100%;
    padding: var(--space-s);
    @media(--m){
        width: 60%;
        background-color: var(--color-white);
    }
    @media(--l){
        width: 50%;
        background-color: var(--color-white);
    }
    }
</style>