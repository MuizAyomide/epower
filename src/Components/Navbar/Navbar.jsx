import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar container">
      <div className="nav">
        {
          open === false ? 
          <img className="logo" src="/image 2.webp" alt="" />:
          <img className="big_logo" src="/image 2.webp" alt="" />
        }
        {open === true ? (
          <div className="mobile_bar">
            <div className="mobile_nav">

            <img className="nav_logo logo" src="/image 2.webp" alt="" />
            <div className="close_menu menu" onClick={() => setOpen(!open)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000"
                >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
                </div>
            </div>
            {/* <Link to="about" className="navbar-link">
            About
          </Link> */}
            <div className="list">What we do</div>
            <div className="list">Our works</div>
            <div className="list">Contact</div>
            <button className="list btn left">Get Started</button>
          </div>
        ) : (
          <svg
            className="menu"
            onClick={() => setOpen(true)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            fill="#000"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        )}

        <div className="desk_bar">
          <div className="list">What we do</div>
          <div className="list">Our works</div>
          <div className="list">Contact</div>
          <button className="list btn left">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
