<script setup>

const props = defineProps({
    sections: { type: Array, required: false },
});

// Sections
const chooseSection = (section) => {
  if (section._type === 'gallery') return resolveComponent('Gallery')
  if (section._type === 'video') return resolveComponent('Video')
  if (section._type === 'textType') return resolveComponent('TextBlock')
  if (section._type === 'imageBlock') return resolveComponent('Image')
}

</script>
<template>
    <div>
      <component class="builder-block"
        v-for="section in props.sections"
        :key="section._key"
        :is="chooseSection(section)"
        :section="section"
      />
    </div>
  </template>
<style scoped>
.builder-block {
  padding: var(--space-s) 0 var(--space-m) 0;
  background: transparent;
}
</style>