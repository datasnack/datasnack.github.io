<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
}>()
</script>

<template>
  <figure class="figure-image">
    <img :src="src" :alt="alt || caption || ''" loading="lazy" />
    <figcaption>
      <slot />
    </figcaption>
  </figure>
</template>


<style scoped>
.figure-image {
  margin: 1rem auto;
  text-align: center;
}

.figure-image img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.figure-image figcaption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.2;
  color: var(--vp-c-text-2);
}
</style>