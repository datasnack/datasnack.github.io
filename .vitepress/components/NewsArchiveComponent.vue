<script setup>
import { data as posts } from '../news.data.js'
</script>

<template>
  <ul>
    <li v-for="post of posts">
      <span>{{ post.date.string }} · </span>
      <a :href="post.url">{{ post.title }}</a> 
      
    </li>
  </ul>
</template>
