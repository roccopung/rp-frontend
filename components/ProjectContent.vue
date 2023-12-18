<script setup>
import project from '~/queries/project';

const { width } = useWindowSize();
const windowWidth = width;

// const { params } = useRoute();
// const projectSlug = params.slug;

const props = defineProps([
    'projectData'
]);

const { data: currentData } = useSanityQuery(project);
console.log(project);

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
        <div class="header">
            <div class="project-title"><span class="project-spec text-top typo--xs">{{ current.year }}</span>{{
                current.title }}<span class="category typo--xs" v-for="category in current.category" :key="category._id">
                    {{ category.title }}
                </span>
            </div>
            <div v-show="windowWidth > 700" class="project-details">
                <div v-if="current.client" class="project-label"><span class="project-spec text-top  typo--xs">Client</span>{{
                    current.client }}</div>
                <div class="project-label"><span class="text-top project-spec typo--xs">Roles</span>
                    <div>{{ formatRoles(current.roles) }}</div>
                </div>
                <div v-if="current.collaborators" class="text-top project-label"><span class="project-spec typo--xs">Made
                        with</span>{{ current.collaborators }}</div>
            </div>
        </div>
        <main>
            <div class="hero-container">
                <div class="hero"><img :src="current.imageUrl" /></div>
            </div>
            <NuxtLink v-if="current.url" class="visit-website" :to="current.url" target="_blank"> Visit {{ current.url }} </NuxtLink>
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
        </main>
        <button class="button" type="submit" @click="nextPage()"></button>
    </div>
</template>
<style scoped>
.button {
    z-index: 100;
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: blue;
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
    border-top: var(--border-black);
    border-bottom: var(--border-black);
    padding: var(--space-2xs);
    display: flex;
    justify-content: center;

    &:hover {
        background-color: var(--color-primary-accent);
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