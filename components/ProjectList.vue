<script setup>
import { fetchProjectType } from '~/composables/projectList';
const { projectData } = await fetchProjectType();


</script>
<template>
  <div class="project-grid typo--m">
    <div v-for="project in projectData">
      <NuxtLink class="item-link grid-item" :to="'/project/' + project.slug">
        <div>
          <div class="project-title">
            {{ project.title }}
            <span class="project-year text-top typo--xs">
              {{ project.year }}</span>
          </div>
          <div class="category typo--xs" v-for="category in project.category" :key="category._id">
            {{ category.title }}
          </div>
        </div>
        <div class="project-image-container">
          <NuxtImg format="webp" :src="$urlFor(project.imageUrl).size(400).url()" />
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

.grid-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  cursor: pointer;
}

.grid-item:hover,
.grid-item:active {
  background-color: var(--color-grey);
}

.project-title {
  padding: 0.1rem 0.2rem;
  background-color: transparent;
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
  line-height: 1;
}


.project-year {
  padding-right: 0.5rem;
  padding-left: var(--space-2xs);
}

.text-top {
  vertical-align: top;
  line-height: 135%;

}
</style>