<script setup >

const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(500, 500)
  }
  p5.draw = () => {
    p5.background("#fff000")
  }
}

const p5wrapper =ref();
const projectList = ref(null);
const container = ref();
const runtimeConfig = useRuntimeConfig();

useHead({
	title: `Main | Rocco Punghellini`,
	meta: [{ name: 'description', content: 'Digital Portfolio of/by Rocco Punghellini' }],
	link: [{ rel: 'canonical', href: runtimeConfig?.public?.FRONT_END_URL }],
});

const homepageQuery = groq`
    *[_type == "homepage"][0]{
		about, contact
	}`;

const { data: homepageData } = useSanityQuery(homepageQuery);

const activeImage = useActiveImage();


// onMounted(() => {
// 	var image = document.querySelector('.image');
// 	var pixelate = new Pixelate(image, {
// 		amount: 0.7, // default: 0, pixelation percentage amount (range from 0 to 1)
// 	});
// })

</script>
<template>
	<div ref="container" class="container">
		<div class="about typo-m">
			<div class="col-title">
				<h3>About me</h3>
			</div>
			<p class="col-par">{{ homepageData.about }} </p>
		</div>
		<ProjectList ref="projectList" />
		<BusinessCard />
	</div>
	<div class="background-image" :style="{ backgroundImage: `url(${activeImage})` }"></div>
	<!-- <P5Wrapper ref="p5wrapper" :sketch="sketch" /> -->

</template>

<style scoped>
.container {
	min-height: 100svh;
	min-width: 100svw;
	display: flex;
	justify-content: center;
	align-items: center;
}

.background-image {
	position: absolute;
	top: 0;
	left: 0;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	transition: 0.3s ease-in-out;
	height: 100%;
	width: 100%;
	z-index: -1;
	filter:blur(20px);
}

.about {
	width: 25svw;
	position: fixed;
	top: 0;
	left: 10px;
	margin-top: calc(100svh - 120px);
}

.cols-container {
	display: flex;
	gap: 6svw;
	color: var(--color-white);
	position: absolute;
	bottom: 0;
	padding-bottom: 10px;
	padding: 10px;

}

.col {
	display: flex;
	gap: 3svw;
	max-width: 34svw;
}

.col-title {
	min-width: max-content;
	opacity: 0.5;
}
</style>