<template>
    <form @submit.prevent>
        <h3>Create post</h3>
        <my-input v-model="post.title" type="text" placeholder="Name" />
        <my-input v-model="post.body" type="text" placeholder="Description" />
        <my-input v-model="post.creator" type="text" placeholder="Creator" />
        <my-button
            style="align-self: flex-end; margin-top: 15px"
            @click="createPost"
            :disabled="isSaveDisabled"
            >Add post</my-button
        >
    </form>
</template>

<script>
import moment from "moment";

export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
                creator: "",
            },
        };
    },
    computed: {
        isSaveDisabled() {
            return !this.post.title || !this.post.body || !this.post.creator;
        },
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.post.date = moment().format("DD/MM/YY");
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: "",
                creator: "",
            };
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>
