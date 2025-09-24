import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Normalizations/postsSlice";
import PostDetail from "../Normalizations/PostsDetails";

const PostsList = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.socialApp.loading);
  const postIds = useSelector((state) => state.socialApp.posts.allIds);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1> Social Media Feed</h1>
      {postIds.map((id) => (
        <PostDetail key={id} postId={id} />
      ))}
    </div>
  );
};

export default PostsList;
