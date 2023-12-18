<script setup>
import { fetchProjectData } from '~/composables/projectComposables';

const { width } = useWindowSize();
const windowWidth = width;

const { params } = useRoute();
const router = useRouter();
const projectSlug = params.slug;

const {currentData} = await fetchProjectData(projectSlug);

const nextData = currentData.value[0]?.next || null;
const prevData = currentData.value[0]?.prev || null;

const goToNextPage = () => {
	if (nextData) {
    router.push({ params: { slug: nextData.slug } });
  }
};

const goToPrevPage = () => {
	if (prevData) {
    router.push({ params: { slug: prevData.slug } });
  }
};


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
						class="project-spec text-top  typo--xs">Client</span>{{ current.client }}</div>
				<div class="project-label"><span class="text-top project-spec typo--xs">Roles</span>
					<div>{{ formatRoles(current.roles) }}</div>
				</div>
				<div v-if="current.collaborators" class="text-top project-label"><span class="project-spec typo--xs">Made
						with</span>{{ current.collaborators }}</div>
			</div>
		</header>
		<main>
			<div class="hero-container">
				<div class="hero"><img :src="current.imageUrl" /></div>
			</div>
			<NuxtLink v-if="current.url" class="visit-website" :to="current.url" target="_blank"> Visit Website </NuxtLink>
			<div v-for="current in currentData" class="content">
				<div class="block-container">
					<div class="block-wrapper">
						<div class="text-top project-spec typo--xs">Summary</div>
						<div>{{ current.summary }}</div>
					</div>
					<div v-if="current.tech" class="block-wrapper">
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
		</main>
		<div class="swipe-projects typo--s">
			<button v-show="current.next" class="button-next" type="submit" @click="goToNextPage">{{current.next?.title}}</button>
			<button v-show="current.prev" class="button-prev" type="submit" @click="goToPrevPage">{{current.prev?.title}}</button>
		</div>
		<Footer />
	</div>
</template>

<style scoped>
.swipe-projects {
	position: fixed;
	bottom: 31px;
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
	/* border-top: var(--border-black);
	border-bottom: var(--border-black); */
	background-color: var(--color-primary-accent);
	padding: var(--space-2xs);
	margin-top: var(--space-m);
	display: flex;
	justify-content: center;

	&:hover {
		background-color: var(--color-acid-green);
	}
}


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
}
</style>