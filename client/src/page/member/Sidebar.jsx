import React from "react";

function Sidebar() {
  return (
    <React.Fragment>
      <div className="col-md-2" aria-label="Left Sidebar">
        <div className="userInfo">
          <img
            src="/image/大頭照.png"
            alt="載入失敗"
            className="circle-image"
          />
          <span className="btn" id="userName">
            <a
              href="./member-userpage.html"
              style={{ textDecoration: "none", color: "black" }}
            >
              愛遛狗小姐姐
            </a>
          </span>
        </div>
        <div className="aside-list">
          <a href="/member/member-history.jsx">
            <span>商品訂單記錄</span>
          </a>
          <a href="./member-Request.html">
            <span>我的請求</span>
          </a>
          <a href="./member-mission.html">
            <span>工作清單</span>
          </a>
          <a href="/member/member-adoption.jsx">
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
                      <a href="./member-userinfo.html" className="btn">
                        更改基本資料
                      </a>
                    </li>
                    <li>
                      <a href="./member-jobsetting.html" className="btn">
                        更改工作設定
                      </a>
                    </li>
                    <li>
                      <a href="./member-password.html" className="btn">
                        密碼設定
                      </a>
                    </li>
                    <li>
                      <a href="/member/addcard.jsx" className="btn">
                        付款方式管理
                      </a>
                    </li>
                    <li>
                      <a href="./member-logistic.html" className="btn">
                        常用收件地址
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <a href="./member-joinus.html">
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
