<script setup >
const { width } = useWindowSize();
const windowWidth = width;
const activeList = useActiveList();
const activeNetwork = useActiveNetwork();
const container = ref();
const runtimeConfig = useRuntimeConfig();


useHead({
	title: `Cose di Rocco Punghellini`,
	meta: [{ name: 'description', content: 'Digital Portfolio of/by Rocco Punghellini' }],
	link: [{ rel: 'canonical', href: runtimeConfig?.public?.FRONT_END_URL }],
});


</script>
<template>
	<div>
		<div ref="container" class="container">
			<ToggleView v-if="windowWidth >= 700" />
			<NetworkDiagram v-if="activeNetwork" />
			<ProjectList v-show="activeList || windowWidth < 700" />
		</div>
		<BusinessCard />
	</div>
</template>

<style scoped>
.container {
	min-height: 100svh;
	min-width: 100svw;
	background-color: var(--color-primary-light);
	padding: var(--space-s);
}
</style>