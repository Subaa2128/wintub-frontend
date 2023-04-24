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
import React, { useState } from "react";
import AddUser from "../AddUser";

const Dashboard: React.FC = () => {
  const [addUser, setAddUser] = useState(false);
  const [open, setOpen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };
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
              <TableRow>
                <TableCell>arunram@gmail.com</TableCell>
                <TableCell>admin</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Dashboard;
