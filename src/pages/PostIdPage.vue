<template>
    <h2>Edited Post</h2>
    <div v-if="currentPost" :post="currentPost" class="post">
        <my-button @click="$router.push('/posts')" style="margin-bottom: 15px"
            >Back</my-button
        >
        <div class="postBtns">
            <div>Title: {{ currentPost.title }}</div>
            <div>Date: {{ currentPost.date }}</div>
        </div>
        <div>Description: {{ currentPost.body }}</div>
        <div>Creator: {{ currentPost.creator }}</div>
        <div class="postBtns">
            <my-button @click="openEditModal(currentPost)">Edit post</my-button>
            <my-button
                @click="removePost(currentPost.id), $router.push('/posts')"
                >Delete post</my-button
            >
        </div>
        <div v-if="showModal" class="modal-background">
            <div class="modal-content">
                <div>
                    <label for="editTitle">Title:</label>
                    <my-input
                        v-model="editedPost.title"
                        type="text"
                        id="editTitle"
                    />
                    <span v-if="!editedPost.title" class="error-message"
                        >Title is required</span
                    >
                </div>
                <div>
                    <label for="editDescription">Description:</label>
                    <my-input
                        v-model="editedPost.body"
                        type="text"
                        id="editDescription"
                    />
                    <span v-if="!editedPost.body" class="error-message"
                        >Description is required</span
                    >
                </div>
                <div>
                    <label for="editTitle">Creator:</label>
                    <my-input
                        v-model="editedPost.creator"
                        type="text"
                        id="editCreator"
                    />
                    <span v-if="!editedPost.creator" class="error-message"
                        >Creator is required</span
                    >
                </div>
                <hr />
                <my-button @click="editPost" :disabled="isSaveDisabled"
                    >Save</my-button
                >
                <my-button style="float: right" @click="closeModal"
                    >Cancel</my-button
                >
            </div>
        </div>
    </div>
    <h2 v-else>Posts not found!</h2>
</template>
<script>
export default {
    data() {
        return {
            showModal: false,
            editedPost: {
                title: "",
                body: "",
                creator: "",
            },
        };
    },
    computed: {
        posts() {
            return this.$store.state.posts;
        },
        postId() {
            return this.$route.params.id;
        },
        currentPost() {
            return this.posts.find((post) => post.id == this.postId);
        },
        isSaveDisabled() {
            return (
                !this.editedPost.title ||
                !this.editedPost.body ||
                !this.editedPost.creator
            );
        },
    },
    methods: {
        removePost(postId) {
            this.$store.dispatch("removePost", postId);
        },
        openEditModal(post) {
            this.editedPost = { ...post };
            this.showModal = true;
        },
        editPost() {
            this.$store.dispatch("editPost", this.editedPost);
            this.showModal = false;
        },
        closeModal() {
            this.showModal = false;
        },
    },
};
</script>
<style scoped>
input {
    margin: 10px 10px 10px 0 !important;
}
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

hr {
    margin: 10px 0;
    height: 5px;
    background-color: black;
}
.modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    max-width: 500px;
}
.error-message {
    color: red;
    font-size: 14px;
    margin-bottom: 10px;
}
</style>
