import CONFIG from "./global/config";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import HomeRestaurant from "./pages/HomeRestaurant";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeRestaurant />} />
    </Routes>
  );
}

export default App;
