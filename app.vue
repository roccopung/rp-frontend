<script setup></script>
<template>
  <NuxtLayout>
    <NuxtPage :transition="{
      name: 'fade',
      mode: 'out-in',
    }" />
    <NuxtLoadingIndicator color="black" />
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
}</style>
