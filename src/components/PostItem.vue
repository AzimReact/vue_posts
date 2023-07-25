<template>
    <div class="post">
        <div><strong>Title: </strong>{{ post.title }}</div>
        <div><strong>Description: </strong>{{ post.body }}</div>
        <div class="postDown">
            <div><strong>Date: </strong>{{ post.date }}</div>
            <div><strong>Creator: </strong>{{ post.creator }}</div>
        </div>
    </div>
    <div class="postBtns">
        <my-button @click="removePost(post.id)">Delete</my-button>
        <my-button @click="$router.push(`/posts/${post.id}`)"
            >More info</my-button
        >
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    methods: {
        removePost(postId) {
            this.$store.dispatch("removePost", postId);
        },
    },
};
</script>

<style scoped>
.post {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 30px;
}
.postDown,
.postBtns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
}
.postBtns {
    margin-top: 10px;
}
</style>
