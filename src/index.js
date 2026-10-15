import React from "react";
import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./Style.css";

import Home from "./Home";
import About from "./About";
// import Errors from './Errors';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path ="*" element={<Errors/>}/> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
