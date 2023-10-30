import { Box } from "@mui/material";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import ContactPerson from "./pages/ContactPerson";
import Home from "./pages/Home";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          background: "#88B7DD",
          padding: "20px",
          display: "flex",
          gap: "10px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/contact">Contact</Link>
      </Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:personId" element={<ContactPerson />} />
      </Routes>
    </div>
  );
};

export default App;
