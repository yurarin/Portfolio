import React from "react";
import "../styles/header.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "../About";

const UrlAgn = () => {
  return (
    <div className="urlAgn">
      <Link to="/about" className="urlAgnItem">
        About
      </Link>
      <Link to="/work" className="urlAgnItem">
        Work
      </Link>
      <Link to="/blog" className="urlAgnItem">
        Blog
      </Link>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/work" element={null} />
        <Route path="/blog" element={null} />
      </Routes>
    </div>
  );
};

export default UrlAgn;
