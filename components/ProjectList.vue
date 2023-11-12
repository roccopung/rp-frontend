<script setup>
const { width } = useWindowSize();
const hoveredProject = ref(null);
const coverImageRef = ref();
const imageSrc = ref('');

const projectQuery = groq`
  *[_type == "projectType"]|order(orderRank) {
    title, year, abstract, cover, category[] -> {
      _id,
      title
    }, 
    "imageUrl": cover.asset->url
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
    <ul class="project-list typo--l">
        <li class="list-item" v-for="project in projectData" @mouseover="hoveredProject = project" @mouseout="hoveredProject = null">
            <NuxtLink class="item-link"  to="#">
                <div>{{ project.title }}<span class="project-year typo--xs">{{ project.year }}</span></div>
            </NuxtLink>
            <!-- v-if="hoveredProject === project" -->
            <div class="details typo--m" v-if="hoveredProject === project" >
                <div class="abstract">{{ project.abstract }}</div>
                <ul>
                    <li class="category" v-for="category in project.category" :key="category._id">
                        {{ category.title }}
                    </li>
                </ul>
                <div class="image-container">
                    <div class="project-image">
                        <img :src="project.imageUrl" />
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<style scoped>




.category {
    padding: 0.2rem 0.4rem;
    background-color: chartreuse;
    width: fit-content;
    border: var(--border-black);
    border-top: 0;
}

.category:first-of-type {
    border-left: 0;
    @media(--m) {
        border-left: var(--border-black);
    }
}

.project-list {
    min-height: auto;
    max-height: 30svh;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: flex-end;
    overflow-y: auto;
    width: 100%;
    background-color: var(--color-white);
    border-top: 1px solid var(--color-black);

    @media (--m) {
        max-height: 250px;
        border: 1px solid var(--color-black);
        align-self: center;
        min-width: 400px;
        width: 25svw;
    }
}

.project-list::-webkit-scrollbar {
    display: none;
}


.list-item {
    width: 100%;
    height: 100%;
    min-height: 40px;
    padding: 0.2rem 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}



.project-list>*:not(:last-child) {
    border-bottom: var(--border-black);
}

.project-year {
    padding-left: 0.5rem;
    vertical-align: top;
}

.image-container {
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    height:100%;
    @media(--m){
        display: block;
        width: inherit;
    }
}

.project-image {
    max-width: 90svw;
    height: 40svh;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    @media(--m) {
        max-width: auto;
        display: block;
        aspect-ratio: auto;
        width: 25svw;
        height: auto;
        margin-top: var(--space-s);

    }
}

.project-image img {
    position: relative;
    height: auto;
    max-height: 100%;
    max-width: 100%;
    border: var(--border-black);

    @media(--m) {
        max-height: 25svw;
    }
}

.details {
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 60vh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.3s ease;

  @media (--m) {
    width: auto;
    height: auto;
    margin-top: var(--space-s);
    margin-left: var(--space-s);
  }
}

.abstract {
    padding: 0.2rem 0.4rem;
    background-color: var(--color-white);
    border-bottom: var(--border-black);

    @media(--m) {
        border: var(--border-black);
    }
}

.details>ul {
    display: flex;
    gap: var(--space-s);
}

.list-item:hover .details {
  opacity: 1;
  cursor: pointer;
}

.list-item:hover {
  background-color: var(--color-primary-accent);
}

.item-link {
    width: 100%;
    height: 100%;
}

</style>