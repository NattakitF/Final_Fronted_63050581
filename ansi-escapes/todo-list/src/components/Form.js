import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Form = ({ posts, setPosts, callbackFn }) => {
  const [dateTime, setDateTime] = useState(new Date());
  const [textInput, setTextInput] = useState("");

  const onHandleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title: textInput,
      isChecked: false,
    };

    await axios.post("http://localhost:8000/todos", data);

    callbackFn();

    setTextInput("");
  };

  const onReset = () => {
    setTextInput("");
    setDateTime(new Date());
  };

  return (
    <Box marginTop={3}>
      <Card>
        <form onSubmit={onHandleSubmit}>
          <CardContent>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={textInput}
                  onChange={(event) => {
                    setTextInput(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button variant="outlined" onClick={onReset}>
              Reset
            </Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </CardActions>
        </form>
      </Card>
    </Box>
  );
};

export default Form;
