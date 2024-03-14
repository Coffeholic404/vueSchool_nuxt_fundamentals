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
    pick: ["Plot", "Title", "Error"],
    key: `/movies/${route.params.id}`,
});
if(movie.value.Error === "Incorrect IMDB ID"){
            showError({statusCode: 404, statusMessage: "Page Not Found"})
        }

</script>
