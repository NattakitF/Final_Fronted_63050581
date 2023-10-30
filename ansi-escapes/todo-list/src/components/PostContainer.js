import { Stack } from "@mui/material";
import React from "react";
import Post from "./Post";

const PostContainer = ({ posts, callbackFn }) => {
  return (
    <Stack spacing={2}>
      {posts.map((todo, index) => {
        return (
          <Post
            post={todo}
            key={todo.id}
            postIndex={index}
            callbackFn={callbackFn}
          />
        );
      })}
    </Stack>
  );
};

export default PostContainer;
