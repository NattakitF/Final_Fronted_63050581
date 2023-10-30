import { Box, Container } from "@mui/material";
import React from "react";
import Header from "./Components/Header";
import List from "./Components/List";

const App = () => {
  return (
    <Box position="relative">
      {/* <Header /> */}
      <Container>
        <List />
      </Container>
    </Box>
  );
};

export default App;
