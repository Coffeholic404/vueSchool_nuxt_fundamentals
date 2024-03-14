<template>
    <div>
        <pre>
            {{data}}
        </pre>
    </div>
</template>

<script setup>
const route = useRoute()
const { data } = await useAsyncData(`/moveis/${route.params.id}`, () => {
    return $fetch(`http://www.omdbapi.com/?apikey=9357a82d&i=${route.params.id}`)
}, {
    pick: ["Plot", "Title"]
})
</script>
