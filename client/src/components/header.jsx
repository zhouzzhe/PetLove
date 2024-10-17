import React, { Component } from "react";
import "../style/header.css"

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav className=" navbar-expand-md fixed-top">
          <div className="navbar container-fluid">
            <a href="" className="navbar-brand">
              LOGO
            </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item ms-3">
                  <a className="nav-link" href="#">
                    關於我們
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <a className="nav-link" href="#">
                    服務項目
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <a className="nav-link" href="#">
                    商品一覽
                  </a>
                </li>
                <li className="nav-item ms-3">
                  <a className="nav-link" href="#">
                    FAQ
                  </a>
                </li>
                <li className="ms-3">
                  {" "}
                  <input
                    className="searchArea"
                    type="search"
                    aria-label="Search"
                  />
                  <a href="" type="submit">
                    <img src="./img/search.svg" style={{ height: "30px" }} />
                  </a>
                </li>
                <li className="ms-3">
                  <a href="#">
                    <img src="./img/membercat.png" style={{ height: "40px" }} />
                  </a>
                </li>
                <li className="ms-3">
                  <a href="#">
                    <img src="./img/cart.png" style={{ height: "35px" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
