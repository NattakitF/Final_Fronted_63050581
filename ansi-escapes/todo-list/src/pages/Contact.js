import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [persons, setPersons] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setPersons(response.data.users);
      })
      .catch((error) => {
        console.log(error.message);

        window.alert(`ดึงข้อมูลผืดพลาด  : ${error.message}`);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        {persons?.map((person) => {
          return (
            <Card
              key={person.id}
              elevation={7}
              className="card-person"
              sx={{ width: "300px" }}
              onClick={() => {
                navigate(`/contact/${person.id}`);
              }}
            >
              <CardContent>
                <Avatar src={person.image} />
                <Typography variant="h6">
                  {person.firstName} {person.lastName}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </div>
  );
};

export default Contact;
