import React from "react";
import "../../style/member.css"
import axios from "axios";

function MemberMain() {
  return (
    <React.Fragment>
      <style>{`
      .image-container {
        position: relative;
        height: 300px;
        overflow: visible;
      }

      .inline-img {
        position: absolute;
        height: 150px;
        width: auto;
        z-index: 10;
        animation-duration: 2s;
      }

      .bottom-left {
        bottom: 100px;
        left: -55px;
      }

      .marquee-container {
        width: 100%;
        overflow: hidden;
        display: flex;
      }

      .marquee-content {
        display: inline-block;
        white-space: nowrap;
        animation: marquee 10s linear infinite;
        margin-right: 30px;
      }

      .marquee-content2 {
        display: inline-block;
        white-space: nowrap;
        animation: marquee2 10s linear infinite;
        margin-right: 30px;
      }
      .marquee-content3 {
        display: inline-block;
        white-space: nowrap;
        animation: marquee2 10s linear infinite;
        margin-right: 30px;
      }

      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      @keyframes marquee2 {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      @keyframes marquee3 {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
      `}
      </style>
      {/* <!-- 置入sidebar --> */}
      <div className="wrapper row">
        <nav className="col-md-2" aria-label="Left Sidebar">
          <div className="userInfo">
            <img src="/image/大頭照.png" alt="載入失敗" className="circle-image" />
            <span className="btn" id="userName">
              愛遛狗小姐姐
            </span>
          </div>
          <div className="aside-list">
            <a href="./member-history.html">
              <span>商品訂單記錄</span>
            </a>
            <a href="./member-Request.html">
              <span>我的請求</span>
            </a>
            <a href="./member-mission.html">
              <span>工作清單</span>
            </a>
            <a href="./member-adoption.html">
              <span>貓狗領養管理</span>
            </a>
            <a href="./member-joinus.html">
              <span>加入我們</span>
            </a>
            <a>
              <span style={{color: "#a52a2a"}}>登出</span>
            </a>
          </div>
        </nav>
        <main className="col-md-10" style={{position: "relative"}}>
          <div>
            <div className="marquee-container">
              <div className="marquee-content">
                <i className="bi bi-exclamation-circle"></i>
                您的帳號控制台裡，您可以檢視近期的訂單，管理您的收貨地址 和
                工作清單和更改密碼或修改帳號資料。
              </div>
              <div className="marquee-content">
                <i className="bi bi-exclamation-circle"></i>
                您的帳號控制台裡，您可以檢視近期的訂單，管理您的收貨地址 和
                工作清單和更改密碼或修改帳號資料。
              </div>
              <div className="marquee-content">
                <i className="bi bi-exclamation-circle"></i>
                您的帳號控制台裡，您可以檢視近期的訂單，管理您的收貨地址 和
                工作清單和更改密碼或修改帳號資料。
              </div>
            </div>
            <div className="image-container" id="imageContainer"></div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default MemberMain;

