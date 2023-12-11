<script setup>

const projectQuery = groq`
  *[_type == "projectType"]|order(orderRank) {
    title, year, cover, roles[] -> {
      _id,
      title
    }, category[] -> {
      _id,
      title
    }, 
    "imageUrl": cover.asset->url,
    "slug": slug.current
  }`;


const { data: projectData } = useSanityQuery(projectQuery);


</script>
<template>
  <div class="project-grid typo--m">
    <div v-for="project in projectData">
      <NuxtLink class="item-link grid-item" :to="'/project/' + project.slug">
        <div>
          <div class="project-title">{{ project.title }}<span class="project-year text-top typo--xs">{{ project.year }}</span></div>
          <div class="category typo--xs" v-for="category in project.category" :key="category._id">
            {{ category.title }}
          </div>
        </div>
        <div class="project-image-container">
            <img :src="project.imageUrl" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, auto-fill);
  grid-gap: 0px;
  grid-row-gap: var(--space-m);
  grid-column-gap: var(--space-xs);
  @media(--m) {
    grid-template-columns: 1fr 1fr;
  }
  @media(--l) {
    grid-template-columns: repeat(auto-fill, 24svw);
  }
}

.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  cursor:pointer; 
}

.grid-item:hover,
.grid-item:active {
  background-color: var(--color-grey);
}

.project-title {
  padding: 0.1rem 0.2rem;
}

.project-image-container {
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-image-container img {
  height: 120px;
  position: relative;
  @media(--xl) {
    height: 8svw;
  }
}

.category {
  padding: 0.1rem 0.2rem;
  background-color: var(--color-acid-green);
  width: fit-content;
  border-top: 0;
}

.project-year {
  padding-right: 0.5rem;
  margin-left: 5px;
}

.text-top {
  vertical-align: top;
}
</style>