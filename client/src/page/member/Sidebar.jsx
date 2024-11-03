import React from "react";
import "animate.css";

function Sidebar() {
  return (
    <React.Fragment>
      <div
        className="col-md-2 animate__animated animate__fadeInLeft"
        aria-label="Left Sidebar"
      >
        <div className="userInfo">
          <img
            src="/image/大頭照.png"
            alt="載入失敗"
            className="circle-image"
          />
          <span className="btn" id="userName">
            <a
              href="/member/userpage"
              style={{ textDecoration: "none", color: "black" }}
            >
              愛遛狗小姐姐
            </a>
          </span>
        </div>
        <div className="aside-list">
          <a href="/member/history">
            <span>商品訂單記錄</span>
          </a>
          <a href="/member/request">
            <span>我的請求</span>
          </a>
          <a href="/member/mission">
            <span>工作清單</span>
          </a>
          <a href="/member/adoption">
            <span>貓狗領養管理</span>
          </a>

          <div className="accordion accordion-flush" id="userInformation">
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseInfo"
                  aria-expanded="false"
                  aria-controls="collapseInfo"
                  id="accordion-btn"
                >
                  <span style={{ marginLeft: "28%" }}>會員資料</span>
                </button>
              </h2>
              <div
                id="collapseInfo"
                className="accordion-collapse collapse"
                aria-labelledby="heading"
                data-bs-parent="#userInformation"
              >
                <div className="accordion-body">
                  <ul>
                    <li>
                      <a href="/member/userinfo" className="btn">
                        更改基本資料
                      </a>
                    </li>
                    <li>
                      <a href="/member/jobsetting" className="btn">
                        更改工作設定
                      </a>
                    </li>
                    <li>
                      <a href="/member/password" className="btn">
                        密碼設定
                      </a>
                    </li>
                    <li>
                      <a href="/member/payment" className="btn">
                        付款方式管理
                      </a>
                    </li>
                    <li>
                      <a href="/member/logistic" className="btn">
                        常用收件地址
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a href="/member/join-us">
            <span>加入我們</span>
          </a>
          <a>
            <span style={{ color: "#a52a2a" }}>登出</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
