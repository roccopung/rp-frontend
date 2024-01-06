<script setup></script>
<template>
    <div class="about-card typo--s">
        <div class="left">
            <div class="name">Rocco Punghellini</div>
        </div>
        <div class="image"></div>
        <div class="right">Visual Developer <br>& Whatsoever</div>
        <div class="about">I’m a curious person with a background in art and design, currently based in Paris, making websites and digital things. If you type my name online you can also find me in amateur movies.</div>
        <div class="contacts">
            <NuxtLink class="link cv" to="https://drive.google.com/file/d/199Q1UIfPbERoERsEZ6VYqPElGXeNOjaw/view?usp=sharing">CV</NuxtLink>
            <NuxtLink class="link insta" to="https://www.instagram.com/rocco.punghellini/">@Instagram</NuxtLink>
            <NuxtLink class="link email" to="mailto:rocco.punghellini@gmail.com">e-mail</NuxtLink>
        </div>
        <div class="radar">
            <div>📡 : </div>
            <BlinkingCircle />
            <div class="status typo--s">Open to projects</div>
        </div>
    </div>
</template>
<style scoped>
.about-card {
    background-color: var(--color-white);
    width: 100%;
    position: fixed;
    bottom: 34.5px;
    padding: var(--space-xs);
    display: grid;
    column-gap: var(--space-xs);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    row-gap: var(--space-s);
    z-index: 200;
    outline: 1px solid var(--color-black);
    @media(--m) {
        border: 0;
        outline: 1px solid var(--color-black);
        min-width: 400px;
        height: fit-content;
        width: 25svw;
        top: 26.5px;
        right: 0;
    }
    @media(--xl) {
        top: 28.5px;
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

.contacts {
    grid-row-start: 3;
    grid-row-end: 4;
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

    @media(--m) {
        aspect-ratio: 1/1;
    }
}

.about {
    grid-column-start: 1;
    grid-column-end: 4;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    @media(--m){
        margin-left: inherit;
        margin-right: inherit;
    }
}

.link {
    width: max-content;
}

.link:hover {
    background-color: var(--color-grey);
}

.radar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-s);
    height: min-content;
    grid-column-start: 2;
    grid-column-end: 4;
    justify-self: flex-end;
    align-self: baseline;
}

.status {
    padding: 0.1rem 0.2rem;
    background-color: var(--color-acid-green);
    width: fit-content;
    border-top: 0;
}

</style>