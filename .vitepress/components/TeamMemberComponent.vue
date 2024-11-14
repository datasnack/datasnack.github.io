<script setup lang="ts">
import { computed } from 'vue'
import { VPButton } from 'vitepress/theme'

interface Link {
    text: string;
    href: string;
}

interface Props {
    name: string,
    intro?: string,
    image?: string,
    size?: 'medium' | 'large'
    links?: Link[]
}

const props = withDefaults(defineProps<Props>(), {
    size: 'medium'
})

</script>

<template>
    <section class="TeamMember">
        <div class="container">
            <div class="items">
                <div class="item grid-avatar">
                    <div v-if="image" class="avatar-wrapper">
                        <img :src="image" :alt="name" width="276" height="276" class="avatar-img" />
                    </div>
                </div>

                <div class="item grid-intro">
                    <div class="intro">
                        <slot></slot>
                    </div>

                    <div v-if="links && links.length" class="buttons">
                        <VPButton v-for="(link, index) in links" :key="index" v-bind="link" tag="a" theme="alt" />
                    </div>

                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
.TeamMember {
    margin: 1.5rem 0;
}

.avatar-img {
    border-radius: 50%; 
    width: 100%; 
    height: auto;

    max-width: 150px;
    margin: 0 auto;
    border: 3px solid var(--vp-home-hero-name-color);
}

@media (min-width: 640px) {
    .avatar-img {
        margin-top: 50px;
    }
}


.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
    .item.grid-avatar {
        width: calc(100% / 3);
    }

    .item.grid-intro {
        width: calc(100% / 3 * 2);
    }
}

@media (min-width: 960px) {
    .item.grid-avatar {
        width: calc(100% / 4);
    }

    .item.grid-intro {
        width: calc(100% / 4 * 3);
    }
}

</style>