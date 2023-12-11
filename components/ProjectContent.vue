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
    <div v-for="current in currentData" class="content">
        <div class="block-container">
            <div class="block-wrapper">
                <div class="text-top project-spec typo--xs">Summary</div>
                <div>{{ current.summary }}</div>
            </div>
            <div class="block-wrapper">
                <div class="text-top project-spec typo--xs">Stack</div>
                <div>
                    <SanityContent :blocks="current.tech" />
                </div>
            </div>
            <div v-if="current.client" v-show="windowWidth < 700" class="block-wrapper">
                <div>
                    <div class="text-top project-spec typo--xs">Client</div>
                    <div>{{ current.client }}</div>
                </div>
            </div>
            <div v-if="current.collaborators" v-show="windowWidth < 700" class="block-wrapper">
                <div class="project-spec text-top">
                    <div class="text-top project-spec typo--xs">Made with</div>
                    <div>{{ current.collaborators }}</div>
                </div>
            </div>
            <div v-show="windowWidth < 700" class="block-wrapper">
                <div>
                    <div class="text-top project-spec typo--xs">Roles</div>
                    <div>{{ formatRoles(current.roles) }}</div>
                </div>
            </div>
        </div>
        <div class="block-container">
            <div class="block-wrapper">
                <div class="text-top project-spec typo--xs">Process</div>
                <div>
                    <SanityContent :blocks="current.description" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.content {
	display: block;
	padding: var(--space-2xs);
	padding-top: var(--space-m);
	padding-bottom: var(--space-xl);

	@media(--m) {
		display: flex;
	}
}

.block-container {
	width: 100%;

	@media(--m) {
		width: 50%;
	}
}

.block-container:first-child {
	@media(--m) {
		padding-right: var(--space-m);
	}
}

.block-wrapper {
	display: block;
	padding-bottom: var(--space-m);
    @media(--m) {
		display: grid;
		grid-template-columns: 1fr 5fr;
	}
	@media(--l) {
		display: grid;
		grid-template-columns: 1fr 8fr;
	}
}</style>