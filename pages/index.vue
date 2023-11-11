<script setup >

const activeList = useActiveList();
const activeNetwork = useActiveNetwork();
const container = ref();
const { width, height } = useElementSize(container);
const runtimeConfig = useRuntimeConfig();

useHead({
	title: `Cose di Rocco Punghellini`,
	meta: [{ name: 'description', content: 'Digital Portfolio of/by Rocco Punghellini' }],
	link: [{ rel: 'canonical', href: runtimeConfig?.public?.FRONT_END_URL }],
});

// const activeImage = useActiveImage();

</script>
<template>
	<!-- <div class="background-image" :style="{ backgroundImage: `url(${activeImage})` }"></div> -->
	<div ref="container" class="container">
		<div class="dimensions">{{ width }} x {{ height }}</div>
		<ProjectList v-show="activeList" />
		<!-- <PixelatedCanvas v-show="activeList" /> -->
		<NetworkDiagram v-show="activeNetwork" />
		<BusinessCard />
		<ToggleView />
	</div>
</template>

<style scoped>
.dimensions {
	position: fixed;
	top: 4px;
	left: var(--space-s);
	color: var(--color-black);
	font-size: 16px;
}

.container {
	min-height: 100svh;
	min-width: 100svw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-primary-light);
}

.background-image {
	position: absolute;
	top: 0;
	left: 0;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	transition: 0.3s ease-in-out;
	height: 100%;
	width: 100%;
	z-index: -1;
	filter: blur(20px);
}

/* .about {
	width: 25svw;
	position: fixed;
	top: 0;
	left: 10px;
	margin-top: calc(100svh - 120px);
}

.cols-container {
	display: flex;
	gap: 6svw;
	color: var(--color-white);
	position: absolute;
	bottom: 0;
	padding-bottom: 10px;
	padding: 10px;

}

.col {
	display: flex;
	gap: 3svw;
	max-width: 34svw;
}

.col-title {
	min-width: max-content;
	opacity: 0.5;
}*/
</style>