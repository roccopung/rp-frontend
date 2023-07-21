<script setup>
const { vw, vh, dvh, viewportStyle } = useViewport()
const mq = useMq()
</script>

<template>
	<main :style="viewportStyle" class="typo--m">
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
		<div style="font-size: var(--space-m)">
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
