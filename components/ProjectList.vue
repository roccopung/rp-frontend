<script setup>
const hoveredProject = ref(null);
const coverImageRef = ref();
const imageSrc = ref('');

const projectQuery = groq`
  *[_type == "projectType"]|order(orderRank) {
    title, year, abstract, cover, "imageUrl": cover.asset->url
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
    <div>
        <!-- <div class="toolbar">

            <div class="sort"></div>
            <div class="filter typo--l">Filter</div> 
        </div> -->
        <div class="project-list typo--l">
            <ul v-for="project in projectData">
                <NuxtLink to="#">
                    <li class="list-item" :key="project._id" @mouseover="hoveredProject = project"
                        @mouseout="hoveredProject = null">
                        <div>{{ project.title }}<span class="project-year typo--s">{{ project.year }}</span></div>
                        <!-- <div class="project-thumbnail">
                                <img :src="project.imageUrl" />
                            </div> -->
                    </li>
                    <!-- <div class="project-image">
                                <img v-if="hoveredProject === project" :src="project.imageUrl" />
                            </div> -->
                </NuxtLink>
                <div class="details typo--m" v-if="hoveredProject === project">{{ project.abstract }}</div>
            </ul>
        </div>
    </div>
</template>

<style scoped>

.details {
    position: absolute;
    top: 0;
    left:0;
    margin-top: var(--space-s);
    margin-left: var(--space-s);
    padding: 0.1rem;
    background-color: chartreuse;
    border: 1px solid #000;
}
/* .toolbar {
    height: 40px;
    width: 100%;
    position: relative;
    display: flex;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-top: 1px solid #000;

} */

/* .sort {
    width: 40px;
    height: 40px;
    background-color: yellow;
}

.filter {
    width: auto;
    height: 40px;
    background-color: chartreuse;
    display: flex;
    justify-content:flex-start;
    align-items:center;
    padding: 0.4rem;
} */

@media screen and (min-width: 768px) {
    .project-list {
        min-height: auto;
        max-height: 250px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-self: center;
        overflow-y: auto;
        padding: 0;
        width: 25svw;
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
    min-height: 40px;
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