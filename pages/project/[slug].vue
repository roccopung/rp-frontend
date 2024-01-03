<script setup>
import { fetchProjectData } from '~/composables/project';

const { params } = useRoute();
const router = useRouter();

const projectSlug = params.slug;
const { currentData } = await fetchProjectData(projectSlug);

const nextData = currentData.value?.next || null;
const prevData = currentData.value?.prev || null;
const swiperData = currentData.value?.gallery?.[0]?.images;
const videoData = currentData.value?.video;

const data = computed(() => {
	return currentData.value;
})

const { width } = useWindowSize();
const windowWidth = width;

</script>
<template>
	<div class="container">
		<Header :currentData="currentData" />
		<main>
			<Swiper v-if="swiperData || videoData" :swiperData="swiperData || []" :videoData="videoData" />
			<NuxtLink v-if="data.url" class="visit-website typo--s" :to="data.url" target="_blank"> Visit Website
			</NuxtLink>
			<Content :currentData="currentData" />
		</main>
		<Footer :nextData="nextData" :prevData="prevData" />
	</div>
</template>

<style scoped>
.container {
	background-color: var(--color-primary-light);
	min-height: 100svh;
	width: 100%;
}

.visit-website {
	width: 100%;
	background-color: var(--color-primary-accent);
	padding: var(--space-2xs);
	display: flex;
	justify-content: center;

	&:hover {
		background-color: var(--color-acid-green);
	}
}
</style>