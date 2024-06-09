import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="*" element={<PageNotFound/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
