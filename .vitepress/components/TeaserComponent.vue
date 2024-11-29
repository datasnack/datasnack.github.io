<script setup lang="ts">
import { computed } from 'vue'
import { VPButton } from 'vitepress/theme'

interface Link {
    text: string;
    href: string;
}

interface Props {
    title: string,
    image?: string,
    links?: Link[]
}

const props = withDefaults(defineProps<Props>(), {

})
</script>

<template>
    <section class="Teaser">
        <h3 class="TeaserHeading">
            {{ title }}
        </h3>

        <div>
            <slot></slot>
        
        
        <div v-if="links && links.length" class="buttons">
            <VPButton v-for="(link, index) in links" :key="index" v-bind="link" tag="a" />
        </div>
        </div>
    </section>
</template>

<style scoped>
.Teaser {
    border-color: var(--vp-custom-block-info-border);
    color: var(--vp-custom-block-info-text);
    background-color: var(--vp-custom-block-info-bg);
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 16px 16px 8px;
    margin: 2rem 0;
}

.TeaserHeading {
    margin: 0;
}

</style>