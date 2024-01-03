<script setup>

const { width } = useWindowSize();
const windowWidth = width;

const props = defineProps({
    currentData: { type: Object, required: true },
});


const formatRoles = (roles) => {
	if (!roles || roles.length === 0) {
		return '';
	}

	const formattedRoles = roles.map((role) => role.title);
	const result = formattedRoles.slice(0, -1).join(', ') + (formattedRoles.length > 1 ? ', ' : '') + formattedRoles.slice(-1);

	return result;
};

if (!props.currentData) {
	throw createError({
		statusCode: "404"
	})
}

</script>

<template>
    <header class="header">
			<div class="project-title">
				<span class="project-spec text-top typo--xs" v-html="props.currentData.year" />
				<span v-html="props.currentData?.title" />
				<span class="category typo--xs" v-for="category in props.currentData.category" :key="category._id"
					v-html="category.title" />
			</div>
			<div v-show="windowWidth > 700" class="project-details">
				<div v-if="props.currentData.client" class="project-label">
					<span class="project-spec text-top  typo--xs">Client</span>
					<span v-html="props.currentData.client" />
				</div>
				<div class="project-label"><span class="text-top project-spec typo--xs">👀</span>
					<div v-html="formatRoles(props.currentData.roles)" />
				</div>
				<div v-if="props.currentData.collaborators" class="text-top project-label">
					<span class="project-spec typo--xs">Made with</span>
					<span v-html="props.currentData.collaborators" />
				</div>
			</div>
		</header>
</template>

<style scoped>

.header {
	position: sticky;
	top: 0;
	width: 100%;
	z-index: 100;
}

.category {
	padding: 0.1rem 0.2rem;
	margin-left: 0.5rem;
	background-color: var(--color-acid-green);
	width: fit-content;
	border-top: 0;
}

.project-spec {
	padding-right: 0.5rem;
}

.text-top {
	vertical-align: top;
}

.project-title {
	padding: var(--space-2xs);
	background-color: var(--color-white);
}

.project-details {
	background-color: var(--color-grey);
	padding: var(--space-2xs);
	display: flex;
	gap: 40px;
}

.project-label {
	display: block;

	@media(--m) {
		display: flex;
	}
}
</style>
