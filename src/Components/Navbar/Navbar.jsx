import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar container">
      <div className="nav">
        <img className="logo" src="/image 2.webp" alt="" />

        <svg
        className="menu"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="#000"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>

      </div>
    </div>
  );
};

export default Navbar;