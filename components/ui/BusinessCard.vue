<script setup></script>
<template>
    <div class="business-card typo--xs">
        <div class="left">
            <div class="name">Rocco Punghellini</div>
            <div class="contacts">
                <NuxtLink to="#">e-mail</NuxtLink>
                <NuxtLink to="#">@Instagram</NuxtLink>
            </div>
        </div>
        <div class="image"></div>
        <div class="right">Visual Developer <br>& Whatsoever</div>
    </div>
</template>
<style scoped>
.business-card {
    background-color: var(--color-white);
    height: 10svh;
    width: 100%;
    position: fixed;
    bottom: 0;
    border-top: 1px dashed var(--color-black);
    padding: 6px;
    display: grid;
    column-gap: var(--space-xs);;
    grid-template-columns: 1fr 1fr 1fr;

    @media(--m) {
        border: var(--border-black);
        min-width: 400px;
        height: auto;
        width: 25svw;
        right: var(--space-s);
        bottom: var(--space-s);;
    }
}

.left {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

.right {
    justify-self: flex-end;
}

.contacts>* {
    display: block;
}

.image {
    height: 100%;
    background-image: url('/images/pigeon.png');
    aspect-ratio: 21/9;
    background-size: cover;
    background-position: center;
    @media(--m){
        aspect-ratio: 1/1;
    }
}
</style>