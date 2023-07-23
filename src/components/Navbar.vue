<template lang="">
    <div class="navbar">
        <div @click="$router.push('/')" id="logo">TodoPosts</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">Posts</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 20px"
                >About</my-button
            >
        </div>
    </div>
</template>
<script>
import MyButton from "./UI/MyButton.vue";
export default {};
</script>
<style scoped>
#logo {
    cursor: pointer;
}
.navbar {
    height: 50px;
    background-color: lightgrey;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns {
    margin-left: auto;
}
</style>

<!-- <router-link to="/">Main</router-link>
<router-link to="/about">About</router-link>
<router-link to="/posts">PostPage</router-link> -->
