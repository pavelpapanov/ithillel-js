import React from "react";
import logo from "../../react-icon.png";

export default class Header extends React.Component {
  render() {
    const logotype = logo;
    return (
        <header className="header">
          <div className="container header__container">
            <img src={logotype} alt="Logotype" height="60" className="logo"/>
            <nav>
              <ul className="menu">
                <li className="menu__item">Learn</li>
                <li className="menu__item">Reference</li>
                <li className="menu__item">Community</li>
                <li className="menu__item">Blog</li>
              </ul>
            </nav>
          </div>
        </header>
    )
  }
}