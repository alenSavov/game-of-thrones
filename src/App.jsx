import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";

//components
import Home from "./components/Home";
import EpisodeDetails from "./components/EpisodeDetails";
import Episodes from "./components/Episodes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="season/:id" element={<Episodes />} />
        <Route path="episode/:id" element={<EpisodeDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
