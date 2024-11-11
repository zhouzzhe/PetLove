import React, { useEffect, useState } from "react";
import "animate.css";
import axios from "axios";

const handleLogout = () => {
  localStorage.removeItem("myUserIDDD");
  console.log("已登出，localStorage 已清除");
  window.location.href = "/login"; // 根據您的路由調整
};

function Sidebar() {
  const [userName, setUserName] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("myUserIDDD");
    console.log("使用的 userId:", userId); // 輸出使用的 userId

    if (userId) {
      fetch(`http://localhost:8000/member/api/user/${userId}`)
        .then((response) => {
          console.log("API 響應狀態:", response.status);
          return response.json();
        })
        .then((data) => {
          console.log("獲取的用戶資料:", data); // 輸出獲取的用戶資料
          if (data) {
            setUserName(data[0].user_name); // 設置用戶名
          } else {
            console.error("未找到用戶名");
            setError("未找到用戶名");
          }
        });
      console.log(userName);
    } else {
      console.error("未提供用戶 ID");
      setError("未提供用戶 ID");
    }
  }, []);

  return (
    <React.Fragment>
      <div
        className="col-md-2 animate__animated animate__fadeInLeft"
        aria-label="Left Sidebar"
        // style={{ width: "250px" }} // 設定您想要的寬度
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
              {userName} {/* 直接顯示用戶名 */}
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
                      <a href="/member/userinfo" className="btn" >
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
          <a onClick={handleLogout} style={{ cursor: "pointer" }}>
            <span style={{ color: "#a52a2a" }}>登出</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
