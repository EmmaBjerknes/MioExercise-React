import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Item from "./components/Product";
import GlobalStyles from "./components/styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Product/:id" element={<Item />} />
      </Routes>
    </>
  );
}

export default App;
