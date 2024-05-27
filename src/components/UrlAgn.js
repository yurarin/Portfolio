import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";

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
    </div>
  );
};

export default UrlAgn;
