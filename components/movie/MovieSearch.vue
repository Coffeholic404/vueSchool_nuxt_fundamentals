<script  setup>
  const query = ref("batman")
  const movies = ref([])
  const  search = async () => {
    const { Search } = await $fetch(`http://www.omdbapi.com/?apikey=9357a82d&s=${query.value}`)
    movies.value =Search
  }
  search()
</script>

<template>
  <div>
  <form @submit.prevent="search">
    <input type="text" name="" id="" v-model="query"> 
    <button>Search</button>
  </form>
  <ul style="display: flex; flex-wrap: wrap; gap: 1rem; list-style: none;">
    <li v-for="movie in movies" :key="movie.imdbID">
    <NuxtLink :to="{name: 'movies-id', params: {id: movie.imdbID}}">
    <img :src="movie.Poster" :alt="movie.title">
    </NuxtLink>
    </li>
  </ul>
</div>
</template>

<style scoped></style>
