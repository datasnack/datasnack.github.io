<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'


function formatDate(raw) {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}

const { Layout } = DefaultTheme
const { frontmatter } = useData()

</script>

<template>
  <Layout>
    <template #doc-before>
        <div v-if="frontmatter.news">
            <div class="top">
                <a href="/news/">← back to news overview</a>
            </div>
            <div class="meta">
                <img class="avatar" :src="frontmatter.author_avatar" width="24" height="24">
                 {{ frontmatter.author }} ·
                {{ formatDate(frontmatter.date).string }}
            </div>
        </div>
        <div v-else />
    </template>
  </Layout>
</template>


<style scoped>
.top {
  font-size: 90%;
  padding-bottom: 0.5em;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 0.5em;
}

.top a {
  color: var(--vp-c-text-2);
}

.meta {
  margin: 0.75em 0 1em;
  display: flex;
}

.avatar {
  border-radius: 50%;
  display: inline-block;
  border: 1px solid var(--vp-home-hero-name-color);
  margin-right: 0.5em;
}

</style>
