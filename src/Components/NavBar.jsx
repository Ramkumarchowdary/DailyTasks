import React from "react";
import { Router, BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormValidation from "./FormValidation";
import Tasks from "./Tasks";
import Home from "./Home";
import NoPage from "./NoPage";
import Login from "../Login";
import { Button, Stack, Box } from "@mui/material";

const NavBar = () => {
  return (
    <Stack
      sx={{
        ml: "20px",
        border: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <nav>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            ml: "100px",
          }}
        >
          <Box sx={{ pr: "20px", ml: "100px", color: "#1e88e5", fontSize: 40 }}>
            {" "}
            <Link to="/">Home</Link>
          </Box>
          <Box sx={{ pr: "20px", ml: "100px", color: "#1e88e5", fontSize: 40 }}>
            {" "}
            <Link to="/form">Rigister</Link>{" "}
          </Box>
          <Box sx={{ pr: "20px", ml: "100px", color: "#1e88e5", fontSize: 40 }}>
            {" "}
            <Link to="/login">Login</Link>{" "}
          </Box>
          <Box sx={{ pr: "20px", ml: "100px", color: "#1e88e5", fontSize: 40 }}>
            {" "}
            <Link to="/task">Task</Link>{" "}
          </Box>
        </Stack>
      </nav>
    </Stack>
  );
};

export default NavBar;
