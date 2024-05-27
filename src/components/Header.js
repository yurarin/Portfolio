import React from "react";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import UrlAgn from "./UrlAgn";
import { Routes, Route, Link } from "react-router-dom";
import App from "../App";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <UrlAgn />
      </header>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </React.Fragment>
  );
};

export default Header;
