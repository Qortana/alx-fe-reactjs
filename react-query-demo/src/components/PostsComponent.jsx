// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

// Function to fetch posts from JSONPlaceholder
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const PostsComponent = () => {
  // Use React Query's useQuery hook
  const { data, isLoading, isError, error, refetch } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60 * 5, // 5 minutes caching
    retry: 1, // retry once if fetch fails
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return (
      <div>
        <p>Error fetching posts: {error.message}</p>
        <button onClick={refetch} style={{ padding: "8px 12px", marginTop: "8px" }}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch} style={{ marginBottom: "12px", padding: "8px 12px" }}>
        Refresh Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: "16px", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
