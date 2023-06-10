import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../containers/Wrapper";

function Header() {
  return (
      <header className="header">
        <Wrapper>
          <span className="site-name">React</span>
          <ul className="menu">
            <li><Link type="nav" to="/">Home</Link></li>
            <li><Link type="nav" to="/contacts">Contacts</Link></li>
            <li><Link type="nav" to="/about">About Us</Link></li>
          </ul>
        </Wrapper>
      </header>
  )
}

export default Header;