<template>
    <div>
        <post-form @create="createPost" />
        <post-list :posts="posts" @remove="removePost" />
    </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
export default {
    components: {
        PostForm,
        PostList,
    },
    computed: {
        posts() {
            return this.$store.state.posts;
        },
    },
    methods: {
        createPost(post) {
            this.$store.dispatch("createPost", post);
        },
        removePost(postId) {
            this.$store.dispatch("removePost", postId);
        },
    },
};
</script>

<style></style>
