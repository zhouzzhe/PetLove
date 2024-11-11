import React from "react";
import "../style/header.css";

function Header() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container-fluid row">
            <div className="col-3">
              <a className="navbar-brand" href="/home">
                <img src="/image/logo白.png" className="logoImg" />
              </a>
            </div>
            {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
            <div
              className="col-9 d-flex justify-content-center"
              id="navbarSupportedContent"
            >
              <div className="col-10">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                  <li className="nav-item dropdown mx-3">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                    >
                      服務項目
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item fs-5" href="/walking">
                          代遛服務
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fs-5" href="/nanny">
                          寵物保母
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fs-5" href="/adopt">
                          毛孩領養
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" href="/shop">
                      商品一覽
                    </a>
                  </li>
                  <li className="nav-item mx-3">
                    <a className="nav-link" href="/faq">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="container-fluid d-flex flex-nowrap col-6 align-items-center">
                <div className="mx-4 text-center">
                  <li className="nav-item">
                    <a href="/member">
                      <img
                        src="/image/membercat.png"
                        style={{ height: "55px" }}
                      />
                    </a>
                  </li>
                </div>
                <div className="mx-4 text-center">
                  <li className="nav-item">
                    <a href="/shop/cart">
                      <img src="/image/cart.png" style={{ height: "50px" }} />
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </nav>
    </React.Fragment>
  );
}

export default Header;
