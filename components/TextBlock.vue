<script setup>
import { PortableText } from '@portabletext/vue';

const props = defineProps({
    section: { Type: Object, required: true }
});

const components = computed(() => ({
    block: {
        h2: (_, { slots }) => h('h2', { class: 'h2 typo--l-alt' }, slots.default?.()),
        p: (_, { slots }) => h('p', { class: 'typo--l' }, slots.default?.()),
    },
    list: {
        number: (_, { slots }) => h('ol', { class: 'listItem' }, slots.default?.()),
  }
}));

</script>
<template>
    <div class="textBlock-container">
        <div class="textBlock">
            <div v-if="props.section.title" class="text-top project-spec typo--xs" v-html="props.section.title"></div>
            <PortableText :value="props.section.TextBlock" :components="components" />
        </div>
    </div>
</template>
<style scoped>
.textBlock-container {
    display: flex;
    justify-content: center;
    width: 100%;
}

.textBlock {
    width: 100%;

    @media(--m) {
        width: 520px;
    }

    @media(--xl) {
        width: 50%;
    }
}

.project-spec {
	line-height: 160%;
    padding-right: 20px;
}

.listItem {
    padding-top: var(--space-s);
    padding-bottom: var(--space-s);
}

.listItem li {
    padding-bottom: var(--space-s);
}
</style>