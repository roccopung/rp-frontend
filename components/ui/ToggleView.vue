<script setup>
const isList = ref(false);
const toggleList = useToggle(isList);

watchEffect(() => {
    const activeList = useActiveList();
    const activeNetwork = useActiveNetwork();
    activeList.value = isList.value;

    if(isList.value == true) {
        activeNetwork.value = false;
    } else {
        activeNetwork.value = true;
    }
})

</script>
<template>
    <div class="toggleView">
        <div class="toggleValue">{{ isList ? "List View" : "Network View" }}</div>
        <button class="toggle" @click="toggleList()">
            <input type="checkbox" class="check">
            <b class="b switch"></b>
            <b class="b track"></b>
        </button>
    </div>
</template>
<style scoped>


.toggleValue {
    text-align: right;
}
.toggleView {
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.b {
    display: block;
}

.toggle {
    position: relative;
    width: 40px;
    height: 20px;
    border-radius: 0;
    background-color: var(--color-black);
    overflow: hidden;
    border: 1px solid #000;
}

.check {
    position: absolute;
    display: block;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 6;
}

.check:checked~.track {
    box-shadow: inset 0 0 0 20px chartreuse;
}

.check:checked~.switch {
    right: 2px;
    left: 22px;
    transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
    transition-property: left, right;
    transition-delay: .05s, 0s;
}

.switch {
    position: absolute;
    left: 2px;
    top: 2px;
    bottom: 2px;
    right: 22px;
    background-color: var(--color-white);
    border-radius: 0;
    z-index: 1;
    transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
    transition-property: left, right;
    transition-delay: 0s, .05s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    outline: 1px solid #000;
}

.track {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    transition: .35s cubic-bezier(0.785, 0.135, 0.150, 0.860);
    border-radius: 0;
}
</style>