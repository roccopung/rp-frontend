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
    const activeImage = useActiveImage();
    if (hoveredProject.value) {
        activeImage.value = hoveredProject.value.imageUrl;
    }
});

</script>
<template>
    <div class="project-list typo--l">
        <ul v-for="project in projectData">
            <div v-if="project.year">
                <NuxtLink to="#">
                    <li class="list-item" :key="project._id" @mouseover="hoveredProject = project"
                        @mouseout="hoveredProject = null">
                        <div>{{ project.title }}<span class="project-year typo--s">{{ project.year }}</span></div>
                        <div class="project-thumbnail">
                            <img :src="project.imageUrl" />
                        </div>
                    </li>
                    <!-- <div class="project-image">
                            <img v-if="hoveredProject === project" :src="project.imageUrl" />
                        </div> -->
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
        width: 33svw;
        min-width: 400px;
        border: 1px solid var(--color-black);
        background-color: var(--color-white);
        /* border-radius: 7px; */
    }

    .project-list::-webkit-scrollbar {
        display: none;
    }
}

.list-item {
    width: 100%;
    height: auto;
    padding: 0.2rem 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.list-item:hover {
    font-style: italic;
}

.project-list>*:not(:last-child) {
    border-bottom: 1px solid var(--color-black);
}

.project-list li:hover {
    background-color: var(--color-primary-accent);
}

.project-year {
    padding-left: 0.5rem;
    vertical-align: top;
}

.project-image {
    width: 25svw;
    height: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: var(--space-s);
    top: var(--space-s);
}

.project-thumbnail {
    width: 4svw;
    min-width: 60px;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    height: auto;
}
</style>