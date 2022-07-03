import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Pages/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
