import React, { Component } from "react";
import "../style/footer.css";


class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="row">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <a href="">
              <img src="../image/logo2.png" alt="" />
            </a>
          </div>

          <div className="col-12 row">
            <div className="col row box">
              <ul className="d-grid">
                <li className="col mb-auto">服務項目</li>
                <li className="col mb-auto">
                  <a href="#">寵物代遛</a>
                </li>
                <li className="col mb-auto">
                  <a href="">寵物保母</a>
                </li>
                <li className="col mb-auto">
                  <a href="">毛孩領養</a>
                </li>
              </ul>
            </div>

            <div className="col row box">
              <ul className="d-grid">
                <li className="col mb-auto">商品一覽</li>
                <li className="col mb-auto">
                  <a href="">乾飼料</a>
                </li>
                <li className="col mb-auto">
                  <a href="">罐頭</a>
                </li>
                <li className="col mb-auto">
                  <a href="">零食</a>
                </li>
                <li className="col mb-auto">
                  <a href="">其他用品</a>
                </li>
                <li className="col mb-auto">
                  <a href="">查看更多</a>
                </li>
              </ul>
            </div>

            <div className="col row box">
              <ul className="d-grid">
                <li className="col mb-auto">聯絡我們</li>
                <li className="col mb-auto">
                  <a href="">04-2326-5860</a>
                </li>
                <li className="col mb-auto">
                  <a href="">10:00 - 22:00</a>
                </li>
                <li className="col mb-auto">
                  <a href="">petlove@gmail.com</a>
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
