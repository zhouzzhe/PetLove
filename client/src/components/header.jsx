import React from "react";
import "../style/header.css";

function Header() {

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid row">
          <div className="col-3">
            <a className="navbar-brand " href="/home" >
              <img src="/image/logo2.png" alt="...loading" className="border" style={{width:"80px"}}/>
            </a>
          </div>
          <div
            className="col-9 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div className="col-6">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                      <a className="dropdown-item" href="#">
                        代遛服務
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        寵物保母
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        毛孩領養
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item mx-3">
                  <a className="nav-link active" href="#">
                    商品一覽
                  </a>
                </li>
                <li className="nav-item mx-3">
                  <a className="nav-link" href="#">
                    FQA
                  </a>
                </li>
              </ul>
            </div>
            <div className="container-fluid d-flex flex-nowrap col-6 align-items-center">
              <div className="mx-4">
                <form className="d-flex align-items-center" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                  />
                  <a href="" type="submit">
                    <img src="/svg/search.svg" style={{ height: "45px" }} />
                  </a>
                </form>
              </div>

              <div className="mx-4 text-center">
                <li className="nav-item">
                  <a href="#">
                    <img
                      src="/image/membercat.png"
                      style={{ height: "55px" }}
                    />
                  </a>
                </li>
              </div>

              <div className="mx-4 text-center">
                <li className="nav-item">
                  <a href="#">
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
