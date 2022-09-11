import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

//components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Episode from "./components/Episode";
import Episodes from "./components/Episodes";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="season/:id" element={<Episodes />} />
        <Route path="episode/:id" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
