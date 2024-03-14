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
    pick: ["Plot", "Title"],
    key: `/movies/${route.params.id}`
})

</script>
