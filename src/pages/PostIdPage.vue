<template lang="">
    <h2>Page with post ID: {{ $route.params.id }}</h2>
    <div class="post">
        <my-button @click="$router.push('/posts')" style="margin-bottom: 15px"
            >Back</my-button
        >
        <div class="postBtns">
            <div>Title:</div>
            <div>Date:</div>
        </div>
        <div>Description:</div>
        <div>Creator:</div>
        <div class="postBtns">
            <my-button @click="$router.push('/posts')">Edit post</my-button>
            <my-button @click="$router.push('/posts')">Delete post</my-button>
        </div>
    </div>
</template>
<script>
import MyButton from "@/components/UI/MyButton";
export default {};
</script>
<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 30px;
}
.postBtns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
}
</style>
