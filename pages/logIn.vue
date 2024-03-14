<template>
    <form @submit.prevent="login">
        <h1>Login</h1>
        <label>
            Username
            <input type="text">
        </label>
        <label>
            Password
            <input type="password">
        </label>
        <button>Login</button>
    </form>
</template>

<script setup>
const user = useUser()
const login= () => {
    user.isLoggedIn = true;
    useRouter().push("/")
}

definePageMeta({
    layout: "plain"
})
</script>

<style lang="scss" scoped>

</style>