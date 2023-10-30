import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ContactPerson = () => {
  const { personId } = useParams();
  const [person, setPerson] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get(`https://dummyjson.com/users/${personId}`)
      .then((response) => {
        setPerson(response.data);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  };

  useEffect(() => {
    if (personId && !isNaN(personId)) {
      getData();
    } else {
      window.alert("no user found");
    }
  }, [personId]);

  return (
    <div>
      <Box>
        <Button
          onClick={() => {
            // navigate(`/contact`);
            navigate(-1);
          }}
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </Box>
      <Stack textAlign="center">
        <Avatar
          src={person.image}
          sx={{ width: "150px", height: "150px", margin: "auto" }}
        />
        <h2>
          {person.firstName} {person.lastName}
        </h2>
        <h3>{person.email}</h3>
      </Stack>
    </div>
  );
};

export default ContactPerson;
