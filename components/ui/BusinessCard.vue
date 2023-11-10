<script setup></script>
<template>
    <div class="business-card typo--s">
        <div class="left">
            <div class="name">Rocco Punghellini</div>
            <div class="contacts">
                <NuxtLink to="#">e-mail</NuxtLink>
                <NuxtLink to="#">@Instagram</NuxtLink>
            </div>
        </div>
        <div class="image"></div>
        <div>Visual Developer <br>& Whatsoever</div>
    </div>
</template>
<style scoped>
.business-card {
    background-color: var(--color-white);
    height: auto;
    width: 25svw;
    position: absolute;
    border: 1px solid var(--color-black);
    bottom: 10px;
    right: 10px;
    padding: 6px;
    display: grid;
    column-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
}

.left {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
}

.contacts > * {
    display: block;
}

.image {
    height: 100%;
    background-image: url('/images/pigeon.png');
    aspect-ratio: 1/1;
    background-size: cover;
}

</style>