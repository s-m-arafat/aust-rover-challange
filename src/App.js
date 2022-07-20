import React from "react";
import "./App.css";
import "tw-elements";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}
