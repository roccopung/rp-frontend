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
			<div>
				<h1 v-html="props.currentData.title" />
				<span class="category typo--xs" v-for="category in props.currentData.category" :key="category._id"
					v-html="category.title" />
			</div>
		</div>
		<div v-show="windowWidth > 700" class="project-details">
			<div v-if="props.currentData.client" class="project-label">
				<span class="project-spec text-top typo--xs">Client</span>
				<span v-html="props.currentData.client" />
			</div>
			<div v-if="props.currentData.roles" class="project-label"><span class="text-top project-spec typo--xs">Work</span>
				<div class="roles" v-html="formatRoles(props.currentData.roles)" />
			</div>
			<div v-if="props.currentData.collaborators" class="project-label">
				<span class="project-spec text-top typo--xs">With</span>
				<span v-html="props.currentData.collaborators" />
			</div>
		</div>
	</header>
</template>

<style scoped>
.header {
	position: sticky;
	top: 0;
	z-index: 2;
	width: 100%;
	pointer-events: none;
}

.category {
	padding: 0.1rem 0.2rem;
	margin-left: 0.5rem;
	background-color: var(--color-acid-green);
	width: fit-content;
	border-top: 0;
	vertical-align: top;
}


.project-spec {
	padding-right: var(--space-s);
	
}

.text-top {
	vertical-align: top;
	line-height: 160%;
}

.project-title {
	padding: var(--space-2xs);
	padding-left: var(--space-xs);
	background-color: var(--color-primary-accent);
	display: grid;
	grid-template-columns: 40px 1fr;
	border-bottom: 1px solid var(--color-black);
	@media(--xl){
		grid-template-columns: 3svw 1fr;
	}
}

.project-details {
	background-color: var(--color-white);
	padding: var(--space-2xs);
	padding-left: var(--space-xs);
	display: flex;
	gap: var(--space-l);
	border-bottom: 1px solid var(--color-black);
	@media(--xl){
		gap: 3svw;
	}
}

.project-label {
	display: block;
	@media(--m) {
		display: grid;
		grid-template-columns: 40px 1fr;
	}
	@media(--xl){
		grid-template-columns: 3svw 1fr;
	}
}
</style>
