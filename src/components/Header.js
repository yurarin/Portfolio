import React from "react";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import UrlAgn from "./UrlAgn";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <UrlAgn />
      </header>
    </React.Fragment>
  );
};

export default Header;
