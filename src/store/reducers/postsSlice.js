import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    posts: [],
    error: "",
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setLoading: (state) =>{
            state.loading = true;
            state.error = "";
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.posts = [];
        },
        setPosts: (state, action) => {
            state.error = "";
            state.loading = false;
            state.posts = action.payload
        },
    },
});

const postsReducer = postsSlice.reducer;
export const { setError, setLoading, setPosts } = postsSlice.actions;
export default postsReducer;