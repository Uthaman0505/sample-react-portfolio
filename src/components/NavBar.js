import React from "react";
import avatar from "../img/avatar.png";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
            <li className="nav-item">
              <NavLink to="/about" exact activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" exact activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" exact activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" exact activeClassName="active">
                Contact
              </NavLink>
            </li>
          </li>
        </ul>
        <footer className="footer">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, quia.
          </p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;

