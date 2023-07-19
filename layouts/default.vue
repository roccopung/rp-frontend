<script setup>
const { vw, vh, dvh, viewportStyle } = useViewport()
const mq = useMq()
</script>

<template>
	<main :style="viewportStyle">
		<UiHeader />
		<ClientOnly>
			<div>
				{{ vw }}
				{{ vh }}
				{{ dvh }}
				{{ mq }}
			</div>
			<div>
				{{ viewportStyle }}
			</div>
		</ClientOnly>
		<div v-for="i in 30">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae porro
			veritatis culpa dolor eius quibusdam nam eveniet temporibus repudiandae.
			Maiores architecto mollitia cum expedita voluptatem vitae corrupti neque
			soluta. Hic.
		</div>
		<slot />
		<UiFooter />
	</main>
</template>

<style lang="postcss"></style>
