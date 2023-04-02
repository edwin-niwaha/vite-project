import { useState } from "react";
import React from "react";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

// import pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Customer from "./pages/customer";

import Menu from "./components/menu";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
