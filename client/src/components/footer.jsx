import React, { Component } from "react";
import "../style/footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="row mx-0">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <a href="/home" className="d-flex justify-content-center">
              <img
                className=""
                src="/image/logo.png"
                alt="...loading"
                style={{ width: "50%"}}
              ></img>
            </a>
          </div>

          <div className="col-12 row">
            <div className="col row box">
              <ul className="d-grid">
                <li className="col mb-auto user-select-none">服務項目</li>
                <li className="col mb-auto">
                  <a href="/walking">寵物代遛</a>
                </li>
                <li className="col mb-auto">
                  <a href="/nanny">寵物保母</a>
                </li>
                <li className="col mb-auto">
                  <a href="/adopt">毛孩領養</a>
                </li>
              </ul>
            </div>

            <div className="col row box">
              <ul className="d-grid">
                <li className="col mb-auto user-select-none">商品一覽</li>
                <li className="col mb-auto">
                  <a href="/shop">乾飼料</a>
                </li>
                <li className="col mb-auto">
                  <a href="/shop">罐頭</a>
                </li>
                <li className="col mb-auto">
                  <a href="/shop">零食</a>
                </li>
                <li className="col mb-auto">
                  <a href="/shop">其他用品</a>
                </li>
                {/* <li className="col mb-auto">
                  <a href="/shop">查看更多</a>
                </li> */}
              </ul>
            </div>

            <div className="col row box user-select-none">
              <ul className="d-grid">
                <li className="col mb-auto">聯絡我們</li>
                <li className="col mb-auto">
                  <p>04-2326-5860</p>
                </li>
                <li className="col mb-auto">
                  <p>10:00 - 22:00</p>
                </li>
                <li className="col mb-auto">
                  <p>petlove@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
