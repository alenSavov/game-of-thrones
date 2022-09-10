import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

//components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Season from "./components/Season";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="season/:id" element={<Season />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
