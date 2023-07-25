<template>
    <div>
        <h2 v-if="posts.length > 0">All posts</h2>
        <div v-else>
            <h3>Posts not found !!!</h3>
            <h3>Try to create a post...</h3>
        </div>

        <post-item
            v-for="post in posts"
            :post="post"
            :key="post.id"
            @remove="$emit('remove', post)"
        />
    </div>
</template>

<script>
import PostItem from "./PostItem";
export default {
    components: {
        PostItem,
    },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
