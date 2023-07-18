<script setup>
const { vw, vh, vhResized, viewportStyle } = useViewport()
</script>

<template>
	<main :style="viewportStyle">
		<UiHeader />
		<ClientOnly>
			<div>
				{{ vw }}
				{{ vh }}
				{{ vhResized }}
			</div>
      <div>
        {{ viewportStyle }}
      </div>
		</ClientOnly>
		<slot />
		<UiFooter />
	</main>
</template>

<style lang="postcss"></style>
