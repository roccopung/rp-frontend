<script setup>

</script>
<template>
  <div class="homepage">
    nuxt boilerplate
    <div class="homepage--ue">ueue</div>
  </div>
</template>

<style lang="postcss" scoped>
.homepage {
  background: red;
  @media (--m) {
    background: teal;
  }
  &--ue{
    background: yellow;
  }
}
</style>
