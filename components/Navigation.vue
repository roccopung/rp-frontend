<script setup>

const { width } = useWindowSize();
const windowWidth = width;

const router = useRouter();

const isAbout = useAbout(); 


</script>
<template>
    <div>
        <div class="navigation-container"
            :class="{ border: router.currentRoute.value.name == 'index', backgroundIndex: router.currentRoute.value.name == 'index' }">
            <div class="navigation-wrapper" :class="{ flexBetween: router.currentRoute.value.name == 'index', flexEnd: router.currentRoute.value.name !== 'index' }">
                <ToggleView v-if="windowWidth >= 700 && router.currentRoute.value.name == 'index'" />
                <div class="buttons-container">
                    <NuxtLink v-if="router.currentRoute.value.name !== 'index'" class="button" to="/">Index
                    </NuxtLink>
                    <div class="button">
                        <ToggleAbout :isAbout="isAbout"/>
                    </div>
                </div>
            </div>
            <About v-if="isAbout" />
        </div>
    </div>
</template>
<style scoped>
.navigation-container {
    position: fixed;
    bottom: 0;
    z-index: 100;
    width: 100svw;
    height: fit-content;
    border-top: 1px solid var(--color-black);
    background-color: var(--color-primary-accent);
    @media(--m) {
        top: 0;
        width: 100svw;
        height: fit-content;
        padding: 0 var(--space-xs) 0 var(--space-xs);
        border-top: none;
        background-color: transparent;
    }
}

.navigation-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flexBetween {
    @media(--m) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.flexEnd {
    @media(--m) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}

.border {
    border-bottom: none;
    @media(--m){
        border-bottom: 1px solid var(--color-black);
    }
}

.backgroundIndex {
    @media(--m) {
        background-color: var(--color-primary-accent);
    }
}

.buttons-container {
    display: flex;
    gap: var(--space-s);
}

.button {
    background-color: var(--color-white);
    padding: var(--space-xs) var(--space-s);
    outline: 1px solid var(--color-black);
    &:hover {
        background-color: var(--color-grey);
    }

    @media(--m) {
        background-color: var(--color-white);
        padding: var(--space-2xs);
    }
}
</style>