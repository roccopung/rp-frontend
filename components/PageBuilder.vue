<script setup>

const props = defineProps({
    sections: { type: Array, required: false },
});

console.log(props.sections);

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
      <component
        v-for="section in props.sections"
        :key="section._key"
        :is="chooseSection(section)"
        :section="section"
      />
    </div>
  </template>
<style scoped></style>