<template>
    <nav style="display: flex; gap: 1rem;">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="https://vueschool.io">Vue School</NuxtLink>
    </nav>
        <slot></slot>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>