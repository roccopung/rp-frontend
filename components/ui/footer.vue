<script setup>

const { params } = useRoute();
const router = useRouter();

const props = defineProps({
	nextData: { type: Object, required: true },
	prevData: { type: Object, required: true },
});


const goToNextPage = () => {
	if (props.nextData) {
		router.push({ params: { slug: props.nextData.slug } });
	}
};

const goToPrevPage = () => {
	if (props.prevData) {
		router.push({ params: { slug: props.prevData.slug } });
	}
};

</script>

<template>
	<footer class="footer typo--s">
		<div v-if="props.nextData || props.prevData" class="swipe-projects typo--s">
			<button v-show="props.nextData" class="button-next" type="submit" @click="goToNextPage">{{ props.nextData.title
			}}</button>
			<button v-show="props.prevData" class="button-prev" type="submit" @click="goToPrevPage">{{ props.prevData.title
			}}</button>
		</div>
		<div class="navigation">
			<NuxtLink to="/">Go to main page</NuxtLink>
			<NuxtLink to="#">About</NuxtLink>
		</div>
	</footer>
</template>

<style scoped>
.swipe-projects {
	display: flex;
}

.button-next {
	width: 50svw;
	padding: var(--space-xs);
	text-align: left;
	background-color: var(--color-primary-accent);

	&:hover {
		background-color: var(--color-acid-green);
	}
}

.button-prev {
	width: 50svw;
	padding: var(--space-xs);
	text-align: right;
	background-color: var(--color-primary-accent);

	&:hover {
		background-color: var(--color-acid-green);
	}
}

.footer {
	position: fixed;
	bottom: 0;
	width: 100%;
	z-index: 100;
}

.navigation {
	background-color: var(--color-white);
	display: flex;
	gap: 40px;
}

.navigation>* {
	padding: var(--space-xs);
}
</style>
