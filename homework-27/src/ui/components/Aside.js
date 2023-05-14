import React from "react";

export default class Aside extends React.Component {
  render() {
    return (
        <aside className="aside">
          <ul className="aside-menu">
            <li className="aside-menu__item">Quick Start</li>
            <li className="aside-menu__item">Installation</li>
            <li className="aside-menu__item">Learn React</li>
          </ul>
        </aside>
    )
  }
}