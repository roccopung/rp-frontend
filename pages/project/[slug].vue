<script setup>
const { width } = useWindowSize();
const windowWidth = width;

const { params } = useRoute();
const projectSlug = params.slug;

// Define the query to get project details
const currentQuery = groq`
    *[_type == "projectType" && slug.current == '${projectSlug}'] {
      title,
      year,
	  client,
	  url,
      category[] -> {
        _id,
        title
      },
	  "imageUrl": cover.asset->url,
	  roles[] -> {
        _id,
        title
      },
	  summary,
	  tech,
	  description
    }`;


// Fetch the project data
const { data: currentData } = useSanityQuery(currentQuery);

const formatRoles = (roles) => {
	if (!roles || roles.length === 0) {
		return '';
	}

	const formattedRoles = roles.map((role) => role.title);
	const result = formattedRoles.slice(0, -1).join(', ') + (formattedRoles.length > 1 ? ', ' : '') + formattedRoles.slice(-1);

	return result;
};



</script>
<template>
	<div class="container" v-for="current in currentData">
		<header class="header">
			<div class="project-title"><span class="project-spec text-top typo--xs">{{ current.year }}</span>{{
				current.title }}<span class="category typo--xs" v-for="category in current.category" :key="category._id">
					{{ category.title }}
				</span>
			</div>
			<div v-show="windowWidth > 700" class="project-details">
				<div v-if="current.client" class="project-label"><span
						class="project-spec text-top  typo--xs">Client</span>{{
							current.client }}</div>
				<div class="project-label"><span class="text-top project-spec typo--xs">Roles</span>
					<div>{{ formatRoles(current.roles) }}</div>
				</div>
				<div v-if="current.collaborators" class="text-top project-label"><span class="project-spec typo--xs">Made with</span>{{ current.collaborators }}</div>
			</div>
		</header>
		<main>
			<div class="hero-container">
				<div class="hero"><img :src="current.imageUrl" /></div>
			</div>
			<NuxtLink class="visit-website" :to="current.url" target="_blank"> Visit Website </NuxtLink>
			<ProjectContent />
		</main>
		<Footer />
	</div>
</template>

<style scoped>
.container {
	background-color: var(--color-primary-light);
	min-height: 100svh;
	width: 100%;
}

.header {
	position: sticky;
	top: 0;
	width: 100%;
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

.hero-container {
	display: flex;
	justify-content: center;
	align-items: center;
}

.hero img {
	max-height: 70svh;
}

.visit-website {
	width: 100%;
	border-top: var(--border-black);
	border-bottom: var(--border-black);
	padding: var(--space-2xs);
	display: flex;
	justify-content: center;

	&:hover {
		background-color: var(--color-primary-accent);
	}
}


</style>