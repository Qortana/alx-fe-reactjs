import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return <div><h2>Post ID: {id}</h2></div>;
};

export default Post;
