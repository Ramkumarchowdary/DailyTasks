import "./App.css";
import IteamDeleter from "./Components/IteamDeleter";
import Button from "./Components/Button";
import { Container } from "@mui/material";
import { red } from "@mui/material/colors";
import Data from "./Data";
import FormValidation from "./Components/FormValidation";
import Tasks from "./Components/Tasks";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import FormData from "./Login";
import NoPage from "./Components/NoPage";
import { useEffect, useState } from "react";
import FormValidalidation from "./Components/FormValidalidation";
// import FormData from './Components/FormData';

function App() {
  let [mob, setmob] = useState("");
  return (
    // <Container sx={{ bgcolor: "#ffd180" }}>
    //   <BrowserRouter>
    //     <NavBar />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/form" element={<FormValidation />} />
    //       <Route path="/task" element={<Tasks mob={mob} />} />
    //       <Route path="/login" element={<FormData setmob={setmob} />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Routes>
    //   </BrowserRouter>
    // </Container>
    <FormValidalidation/>
  );
}

export default App;
