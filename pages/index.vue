<script setup >
const { width } = useWindowSize();
const windowWidth = width;
const activeList = useActiveList();
const activeNetwork = useActiveNetwork();
const container = ref();
const activeImage = useActiveImage();
const runtimeConfig = useRuntimeConfig();

useHead({
	title: `Cose di Rocco Punghellini`,
	meta: [{ name: 'description', content: 'Digital Portfolio of/by Rocco Punghellini' }],
	link: [{ rel: 'canonical', href: runtimeConfig?.public?.FRONT_END_URL }],
});


</script>
<template>
	<div ref="container" class="container">
		<!-- <div v-show="windowWidth < 700" class="background-image" :style="{ backgroundImage: `url(${activeImage})` }"></div> -->
		<ToggleView v-show="windowWidth >= 700" />
		<NetworkDiagram v-if="activeNetwork" />
		<div v-else> Nothing </div>
		<ProjectList v-show="activeList || windowWidth < 700" />
		<BusinessCard />
	</div>
</template>

<style scoped>
.container {
	min-height: 100svh;
	min-width: 100svw;
	background-color: var(--color-primary-light);
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	@media(--m) {
		justify-content: center;
		align-items: center;
	}
}
/* .background-image {

	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	transition: 0.3s ease-in-out;
	height: 100%;
	width: 100%;
	z-index: -1;
} */
</style>