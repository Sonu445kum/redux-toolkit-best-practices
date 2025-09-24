import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "../Normalizations/postsSlice";

const PostDetail = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) return null;

  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>{post.title}</h2>
      <p> {post.author.name}</p>
      <h4> Comments:</h4>
      <ul>
        {post.comments.map((c) => (
          <li key={c.id}>
            {c.text} — <strong>{c.user.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
