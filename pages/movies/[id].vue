<template>
    <div>
        <pre>
            {{movie}}
        </pre>
    </div>
</template>

<script setup>
const route = useRoute()
const {data: movie} = await useFetch((`http://www.omdbapi.com/?apikey=9357a82d&i=${route.params.id}`), {
    pick: ["Plot", "Title", "Error", "Poster"],
    key: `/movies/${route.params.id}`,
});
if(movie.value.Error === "Incorrect IMDB ID"){
            showError({statusCode: 404, statusMessage: "Page Not Found"})
        }

    useHead({
  title: movie.value.Title,
  meta: [
    { name: "description", content: movie.value.Plot },
    { property: "og:description", content: movie.value.Plot },
    { property: "og:image", content: movie.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});

</script>
