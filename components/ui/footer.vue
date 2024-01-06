<script setup>

const router = useRouter();

const props = defineProps({
	nextData: { type: Object, required: false },
	prevData: { type: Object, required: false },
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
	<div>
		<footer class="footer typo--s">
			<div v-if="router.currentRoute.value.name !== 'index'" class="swipe-projects typo--s">
				<button :class="{ invisible: !props.prevData }" class="button-prev" type="submit" @click="goToPrevPage" v-html="props.prevData?.title + ' ← ' " />
				<button :class="{ invisible: !props.nextData }" class="button-next" type="submit" @click="goToNextPage" v-html="' → ' + props.nextData?.title" />
			</div>
		</footer>
	</div>
</template>

<style scoped>
.swipe-projects {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	border-top: 1px solid var(--color-black);
	background-color: var(--color-white);
}

.button-next {
	width: 1fr;
	padding: var(--space-xs) var(--space-s);
	text-align: right;
	outline: 1px solid var(--color-black);
	&:hover {
		background-color: var(--color-acid-green);
	}
}

.invisible {
	visibility: hidden;
}

.button-prev {
	width: 1fr;
	padding: var(--space-xs) var(--space-s);
	text-align: left;
	outline: 1px solid var(--color-black);

	&:hover {
		background-color: var(--color-acid-green);
	}
}

.footer {
	margin-bottom: 34px;
	@media(--m){
		margin-bottom: 0;
	}
}

.navigation {
	background-color: var(--color-white);
	display: flex;
	gap: var(--space-s);
}

.navigation>* {
	&:hover {
		background-color: var(--color-grey);
	}
}
</style>
