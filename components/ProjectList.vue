<script setup>
const hoveredProject = ref(null);
const coverImageRef = ref();
const imageSrc = ref('');

const projectQuery = groq`
  *[_type == "projectType"] {
    title, year, cover, "imageUrl": cover.asset->url
  }`;


const { data: projectData } = useSanityQuery(projectQuery);

watchEffect(() => {
    if (hoveredProject.value) {
        const activeImage = useActiveImage();
        activeImage.value = hoveredProject.value.imageUrl;
    }
});

</script>
<template>
    <div class="project-list typo--m">
        <ul v-for="project in projectData">
            <div v-if="project.year">
                <NuxtLink to="#">
                    <li class="list-item" :key="project._id" @mouseover="hoveredProject = project"
                        @mouseout="hoveredProject = null">
                        {{ project.title }}
                    </li>
                    <div class="project-image">
                            <img v-if="hoveredProject === project" :src="project.imageUrl" />
                        </div>
                </NuxtLink>
            </div>
        </ul>
    </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
    .project-list {
        min-height: auto;
        max-height: 400px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-self: center;
        overflow-y: auto;
        padding: 0;
        width: fit-content;
        min-width: 365px;
        border: 1px solid var(--color-black);
        background-color: var(--color-white-transparent);
        border-radius: 7px;
    }

    .project-list::-webkit-scrollbar {
        display: none;
    }
}

.list-item {
    width: 100%;
    height: auto;
    padding: 0.2rem 0 0.3rem 0.3rem;
}

.project-list>*:not(:last-child) {
    border-bottom: 1px solid var(--color-black);
}

.project-list li:hover {
    background-color: var(--color-primary-accent);
}

.project-year {
    padding-right: 0.5rem;
}

.project-image {
    width: 25svw;
    height: 50svh;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    right: 10px;
    top: calc(25svh);
}
</style>