<script setup>
const runtimeConfig = useRuntimeConfig();


useHead({
  title: 'Cose di Rocco Punghellini',
  meta: [
    { name: 'description', content: 'Digital portfolio of frontend / design projects' },
    { name: 'keywords', content: 'Frontend Development, Frontend Developer, Digital Designer, Digital Design, Visual Developer, RCA, Royal College of Art, Politecnico di Milano, Art & Technology, Website Development, Web Design, Graphic Design, Introspective Design, Visual Communication, Schema Design' }
  ],
	link: [
    { rel: 'canonical', href: runtimeConfig?.public?.FRONT_END_URL },    
  ]
})


</script>

<template>
  <NuxtLayout>
    <NuxtPage :transition="{
      name: 'fade',
      mode: 'out-in',
    }" />
    <NuxtLoadingIndicator color="#32FF2E" />
  </NuxtLayout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
