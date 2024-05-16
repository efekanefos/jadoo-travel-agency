import React from "react";
import logo from "../../assets/headerImages/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logoImgContent">
        <img src={logo} alt="Logo" className="logoImg" />
      </div>
      <ul className="headerList">
        <li className="headerListItem">
          <a href="/" className="headerListItemLink">
            Destinations
          </a>
        </li>

        <li className="headerListItem">
          <a href="/" className="headerListItemLink">
            Hotels
          </a>
        </li>

        <li className="headerListItem">
          <a href="/" className="headerListItemLink">
            Flights
          </a>
        </li>

        <li className="headerListItem">
          <a href="/" className="headerListItemLink">
            Bookings
          </a>
        </li>

        <li className="headerListItem">
          <a href="/" className="headerListItemLink">
            Login
          </a>
        </li>

        <li className="headerListItem headerListItem--border">
          <a href="/" className="headerListItemLink">
            Sign Up
          </a>
        </li>
        <li className="headerListItem headerListItem--language">
          <a href="/" className="headerListItemLink">
            EN
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
