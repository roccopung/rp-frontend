<script setup>
const { vw, vh, dvh, viewportStyle } = useViewport()
const mq = useMq()

</script>

<template>
	<main :style="viewportStyle" class="typo--m">
		<slot></slot>
	</main>
</template>

<style></style>
