<template>
    <div class="app">
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
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: "Javascript 1",
                    body: "This is JS 1",
                    creator: "AZIMKA",
                    date: "22/07/23",
                },
            ],
            title: "",
            body: "",
            creator: "",
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
        },
        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.app {
    padding: 50px;
}
</style>
