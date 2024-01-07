<script setup>
import { PortableText } from '@portabletext/vue';

const { width } = useWindowSize();
const windowWidth = width;

const props = defineProps({
    currentData: { type: Object, required: true },
});


const formatRoles = (roles) => {
	if (!roles || roles.length === 0) {
		return '';
	}

	const formattedRoles = roles.map((role) => role.title);
	const result = formattedRoles.slice(0, -1).join(', ') + (formattedRoles.length > 1 ? ', ' : '') + formattedRoles.slice(-1);

	return result;
};

if (!props.currentData) {
	throw createError({
		statusCode: "404"
	})
}

</script>

<template>
    <div v-if="props.currentData.summary || props.currentData.description" class="page-content">
        <div class="base-content">
            <div class="block-container">
                <div v-if="props.currentData.summary" class="block">
                    <div class="text-top project-spec typo--xs">Summary</div>
                    <div>
                        <PortableText :value="props.currentData.summary"/>
                    </div>
                </div>
                <div v-if="props.currentData.tech" class="block">
                    <div class="text-top project-spec typo--xs">Stack</div>
                    <div>
                        <PortableText :value="props.currentData.tech"/>
                    </div>
                </div>
                <div v-if="props.currentData.client" v-show="windowWidth < 700" class="block">
                    <div>
                        <div class="text-top project-spec typo--xs">Client</div>
                        <div v-html="props.currentData.client" />
                    </div>
                </div>
                <div v-if="props.currentData.collaborators" v-show="windowWidth < 700" class="block">
                    <div class="project-spec text-top">
                        <div class="text-top project-spec typo--xs">Made with</div>
                        <div v-html="props.currentData.collaborators" />
                    </div>
                </div>
                <div v-if="props.currentData.roles" v-show="windowWidth < 700" class="block">
                    <div>
                        <div class="text-top project-spec typo--xs">👀</div>
                        <div v-html="formatRoles(props.currentData.roles)" />
                    </div>
                </div>
            </div>
            <div class="block-container">
                <div v-if="props.currentData.description" class="block">
                    <div class="text-top project-spec typo--xs">Description</div>
                    <div>
                        <PortableText :value="props.currentData.description"/>
                    </div>
                </div>
            </div>
        </div>
        <PageBuilder :sections="props.currentData.pageBuilder" />
    </div>
</template>
<style scoped>

.page-content {
    padding: var(--space-2xs);
    padding-top: var(--space-m);
    padding-bottom: var(--space-m);
}
.base-content {
    display: block;
    padding-bottom: var(--space-l);

    @media(--m) {
        display: flex;
    }
}

.block-container {
    width: 100%;
    @media(--m) {
        width: 50%;
    }
}

.block-container:first-child {
    @media(--m) {
        padding-right: var(--space-xs);
    }
}

.block {
    display: block;
    padding: var(--space-s);
    

    @media(--m) {
        display: grid;
        grid-template-columns: 70px auto;
        padding: var(--space-xs);
    }

    @media(--xl){
        grid-template-columns: 5.5svw auto;
    }
}

.project-spec {
	line-height: 160%;
    padding-right: 20px;
    @media(--xl){
        padding-right: 1svw;
    }
}

</style>