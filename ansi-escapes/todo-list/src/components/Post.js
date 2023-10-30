import { Card, CardContent, Checkbox, Grid, IconButton } from "@mui/material";
import React from "react";
import { format } from "date-fns";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";

const Post = ({ post, postIndex, callbackFn }) => {
  const onDelete = async (item) => {
    if (window.confirm(`คุณต้องการลบรายการ ${item.title} ใช่หรือไม่`)) {
      const id = item._id;

      await axios.delete(`http://localhost:8000/todos/${id}`);

      callbackFn();

      window.alert("ลบเรียบร้อยแล้ว");
    }
  };

  const onHandleCheck = async (event, item) => {
    const checkValue = event.target.checked;
    const id = item._id;

    const data = {
      // title: "ถูบ้านชั้น 2",
      isChecked: checkValue,
    };

    await axios.put(`http://localhost:8000/todos/${id}`, data);

    callbackFn();
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            {postIndex + 1}
          </Grid>
          <Grid item xs={2}>
            <Checkbox
              checked={post.isChecked}
              onChange={(event) => onHandleCheck(event, post)}
            />
          </Grid>
          <Grid item xs={8}>
            {post.title}
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={() => onDelete(post)}
              // onClick={onDelete}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Post;
