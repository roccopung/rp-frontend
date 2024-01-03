<script setup>
const { vw, vh, dvh, viewportStyle } = useViewport()
const mq = useMq()

</script>

<template>
	<div 
	:style="viewportStyle" 
	class="typo--m">
		<slot></slot>
	</div>
</template>

<style></style>
