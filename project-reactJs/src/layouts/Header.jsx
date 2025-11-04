import React from "react";
import { Link } from "react-router-dom";
import st from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="logo">LOGO</div>
      <nav className={st.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
