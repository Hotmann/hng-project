import React from "react";
import { Routes, Route } from "react-router-dom";

import Hompage from "./pages/homepage/hompage";
import Footer from "./component/footer/footer";
import Contact from "./pages/contact/contact";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
