import { createStore } from "vuex";

export default createStore({
    state: {
        posts: JSON.parse(localStorage.getItem('posts')) || [], // Load from LocalStorage if available
    },
    mutations: {
        ADD_POST(state, post) {
            state.posts.push(post);
            localStorage.setItem('posts', JSON.stringify(state.posts)); // Save to LocalStorage
        },
        REMOVE_POST(state, postId) {
            state.posts = state.posts.filter((p) => p.id !== postId);
            localStorage.setItem('posts', JSON.stringify(state.posts)); // Save to LocalStorage
        },
        EDIT_POST(state, editedPost) {
            const index = state.posts.findIndex((p) => p.id === editedPost.id);
            if (index !== -1) {
                state.posts[index] = editedPost;
                localStorage.setItem('posts', JSON.stringify(state.posts)); // Save to LocalStorage
            }
        },
    },
    actions: {
        createPost({ commit }, post) {
            commit('ADD_POST', post);
        },
        removePost({ commit }, postId) {
            commit('REMOVE_POST', postId);
        },
        editPost({ commit }, editedPost) {
            commit('EDIT_POST', editedPost);
        },
    },
}) 