import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddUser from "../AddUser";
import { baseURL } from "../../api";

const Dashboard: React.FC = () => {
  const [addUser] = useState(false);
  const [userData, setUserData] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${baseURL}/users/`);
      console.log(data);
      setUserData(data);
    };
    getData();
    return;
  }, []);

  return (
    <div>
      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
          p: 2,
          mt: 2,
          mb: 2,
          boxShadow: "none",
        }}
      >
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          gap={2}
          mb={4}
          flexDirection="row"
        >
          <Typography variant="h4">Login UserEmail</Typography>

          <Box display="flex" gap={1}>
            <Box>
              <Button
                color="primary"
                variant="contained"
                onClick={() => setOpen(!open)}
              >
                Add User
              </Button>
              {open && (
                <AddUser addUser={addUser} setAddUser={handleCloseModal} />
              )}
            </Box>
            <Box>
              <Button variant="contained">Logout</Button>
            </Box>
          </Box>
        </Box>
        <TableContainer style={{ marginTop: "35px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 600 }}>Email</TableCell>
                <TableCell style={{ fontWeight: 600 }}>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.map((f, i) => (
                <TableRow key={i}>
                  <TableCell>{f.email}</TableCell>
                  <TableCell>{f.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Dashboard;
