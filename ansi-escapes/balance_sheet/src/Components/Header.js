import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import RegisterDialog from "./RegisterDialog";

const Header = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const styles = {
    container: {
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#85FFBD",
      backgroundImage: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",

      position: "sticky",
      top: 0,
      marginBottom: "10px",
    },
  };

  const onHandleLogin = () => {
    console.log({
      username,
      password,
    });
  };

  const onHandleOpenDialog = () => {
    setOpenDialog(true);
  };

  return (
    <Box sx={styles.container}>
      <Box>
        <Typography variant="h6">รายรับ-รายจ่าย</Typography>
      </Box>
      <Stack direction="row" spacing={1}>
        <TextField
          label="username"
          onChange={(ev) => setUsername(ev.target.value)}
          value={username}
        />
        <TextField
          type="password"
          label="password"
          onChange={(ev) => setPassword(ev.target.value)}
          value={password}
        />
        <Button variant="contained" color="success" onClick={onHandleLogin}>
          Login
        </Button>
        <Button variant="outlined" color="success" onClick={onHandleOpenDialog}>
          Register
        </Button>
        <RegisterDialog open={openDialog} setOpen={setOpenDialog} />
      </Stack>
    </Box>
  );
};

export default Header;
