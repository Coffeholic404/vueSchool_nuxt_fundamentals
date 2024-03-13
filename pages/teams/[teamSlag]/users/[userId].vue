<template>
    <div>
        <p>
            {{ message }}
        </p>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const message = computed(() => `I'm on team ${ route.params.theamSlug }
            and my user id is ${ route.params.userId }`)
</script>
