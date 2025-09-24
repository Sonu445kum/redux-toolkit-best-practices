import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 1 API call
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch("http://localhost:5000/posts");
  return res.json();
});

const postsSlice = createSlice({
  name: "socialApp",
  initialState: {
    posts: { byId: {}, allIds: [] },
    users: { byId: {}, allIds: [] },
    comments: { byId: {}, allIds: [] },
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;

        const posts = {};
        const users = {};
        const comments = {};

        action.payload.forEach((post) => {
          users[post.author.id] = post.author;

          const commentIds = [];
          post.comments.forEach((c) => {
            comments[c.id] = { ...c, user: c.user.id };
            users[c.user.id] = c.user;
            commentIds.push(c.id);
          });

          posts[post.id] = {
            id: post.id,
            title: post.title,
            author: post.author.id,
            comments: commentIds,
          };
        });

        state.posts.byId = posts;
        state.posts.allIds = Object.keys(posts);

        state.users.byId = users;
        state.users.allIds = Object.keys(users);

        state.comments.byId = comments;
        state.comments.allIds = Object.keys(comments);
      });
  },
});

export default postsSlice.reducer;

// 2️ Selector
export const selectPostById = (state, postId) => {
  const post = state.socialApp.posts.byId[postId];
  if (!post) return null;

  return {
    ...post,
    author: state.socialApp.users.byId[post.author],
    comments: post.comments.map((cId) => ({
      ...state.socialApp.comments.byId[cId],
      user: state.socialApp.users.byId[state.socialApp.comments.byId[cId].user],
    })),
  };
};
