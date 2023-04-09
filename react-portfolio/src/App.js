import React from "react";
import "./App.css";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="Experience" element={<Experience />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
