"use client";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const page = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" />
      </Routes>
    </Router>
  );
};

export default page;
