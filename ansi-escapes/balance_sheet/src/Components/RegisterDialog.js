import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";

const RegisterDialog = ({ open, setOpen }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSubmit = () => {
    console.log({
      firstName,
      lastName,
      username,
      password,
    });

    // setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <DialogTitle>Register</DialogTitle>
      <DialogContent>
        <Grid container spacing={3} my={1}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Firstname"
              onChange={(ev) => setFirstName(ev.target.value)}
              value={firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Lastname"
              onChange={(ev) => setLastName(ev.target.value)}
              value={lastName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Username"
              onChange={(ev) => setUsername(ev.target.value)}
              value={username}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Password"
              onChange={(ev) => setPassword(ev.target.value)}
              type="password"
              value={password}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="success"
              onClick={onHandleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
