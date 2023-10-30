import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";

const List = () => {
  const [rows, setRows] = useState([]);

  const [title, setTitle] = useState("");
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");

  const styles = {
    card: { width: "200px", p: 3, m: 1, color: "white" },
  };

  const onHandleAdd = () => {
    console.log({
      title,
      income,
      expense,
    });
  };

  useEffect(() => {
    const fakeData = [
      {
        title: "List1",
        income: "300",
        expense: "",
      },
      {
        title: "List2",
        income: "100",
        expense: "",
      },
      {
        title: "List3",
        income: "",
        expense: "300",
      },
      {
        title: "List4",
        income: "199",
        expense: "",
      },
      {
        title: "List5",
        income: "",
        expense: "200",
      },
      {
        title: "List6",
        income: "",
        expense: "50",
      },
      {
        title: "List7",
        income: "",
        expense: "500",
      },
      {
        title: "List8",
        income: "1500",
        expense: "",
      },
      {
        title: "List9",
        income: "2500",
        expense: "",
      },
    ];

    setRows(fakeData);
  }, []);

  return (
    <Stack>
      <Box
        marginY={2}
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        <Paper
          elevation={5}
          sx={{
            ...styles.card,

            backgroundImage:
              "radial-gradient( circle farthest-corner at 10% 20%,  rgba(14,174,87,1) 0%, rgba(12,116,117,1) 90% )",
          }}
        >
          <Box>
            <Typography variant="body1">รายรับรวม</Typography>
          </Box>
          <Box>
            <Typography variant="h4">1000</Typography>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            ...styles.card,

            backgroundImage:
              "radial-gradient( circle 860px at 11.8% 33.5%,  rgba(240,30,92,1) 0%, rgba(244,49,74,1) 30.5%, rgba(249,75,37,1) 56.1%, rgba(250,88,19,1) 75.6%, rgba(253,102,2,1) 100.2% )",
          }}
        >
          <Box>
            <Typography variant="body1">รายจ่ายรวม</Typography>
          </Box>
          <Box>
            <Typography variant="h4">1000</Typography>
          </Box>
        </Paper>
        <Paper
          elevation={5}
          sx={{
            ...styles.card,
            backgroundImage:
              "linear-gradient( 68.4deg,  rgba(99,251,215,1) -0.4%, rgba(5,222,250,1) 100.2% )",
          }}
        >
          <Box>
            <Typography variant="body1">คงเหลือ</Typography>
          </Box>
          <Box>
            <Typography variant="h4">1000</Typography>
          </Box>
        </Paper>
      </Box>

      <TableContainer component={Paper} sx={{ maxHeight: "50vh" }}>
        <Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>รายการ</TableCell>
              <TableCell>รายรับ</TableCell>
              <TableCell>รายจ่าย</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell sx={{ color: "green" }}>
                  {row.income && `+${row.income}`}
                </TableCell>
                <TableCell sx={{ color: "red" }}>
                  {row.expense && `-${row.expense}`}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid container component={Paper} alignItems="center">
        <Grid item xs={12} md={3.5}>
          <TextField
            variant="standard"
            fullWidth
            label="รายการ	"
            onChange={(ev) => setTitle(ev.target.value)}
            value={title}
          />
        </Grid>
        <Grid item xs={12} md={3.5}>
          <TextField
            variant="standard"
            fullWidth
            label="รายรับ"
            onChange={(ev) => setIncome(ev.target.value)}
            value={income}
          />
        </Grid>
        <Grid item xs={12} md={3.5}>
          <TextField
            variant="standard"
            fullWidth
            label="รายจ่าย"
            onChange={(ev) => setExpense(ev.target.value)}
            value={expense}
          />
        </Grid>
        <Grid item xs={12} md="auto">
          <Button variant="contained" onClick={onHandleAdd}>
            เพิ่มรายการ
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default List;
