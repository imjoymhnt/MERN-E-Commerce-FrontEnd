import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">Amway</div>
      <div className="navbar__item">About Us</div>
      <div className="navbar__item">Contact</div>
      <div className="navbar__item">Help</div>
    </header>
  );
};

export default Header;
