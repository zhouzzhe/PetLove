import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

function UserPage() {
  const [Job, setJob] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
  });

  useEffect(() => {
    const tabs = document.querySelectorAll(".nav-link");

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        tabs.forEach((t) => t.classList.remove("active-tab"));
        this.classList.add("active-tab");
      });
    });
    const images = [
      {
        src: "/svg/skatedog.svg",
        alt: "skatedog Icon",
        className: "animate__animated animate__lightSpeedInLeft bottom-right",
        hoversrc: "/svg/sway.svg",
        changesrc: "/svg/wait.svg",
        animationDuration: 3000,
      },
      {
        src: "/svg/hit.svg",
        alt: "hit Icon",
        className: "animate__animated animate__bounceOutRight bottom-right1",
      },
    ];

    images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
      imgElement.alt = image.alt;
      imgElement.className = image.className;

      if (image.hoversrc) {
        imgElement.addEventListener("mouseover", () => {
          imgElement.src = image.hoversrc;
        });
        imgElement.addEventListener("mouseout", () => {
          imgElement.src = image.changesrc;
        });

        setTimeout(() => {
          imgElement.src = image.changesrc;
        }, image.animationDuration);
      }

      if (image.hoversrc && image.hoversrc.includes("sway.svg")) {
        imgElement.addEventListener("click", () => {
          const originalsrc = imgElement.src;
          imgElement.src = "/svg/gototop.svg";

          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          setTimeout(() => {
            imgElement.src = originalsrc;
          }, 300);
        });
      }

      document.getElementById("imageContainer").appendChild(imgElement);
    });
  }, []);
  return (
    <div className="wrapper row">
      <Sidebar />
      <main className="col-md-10">
        <div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="user-tab"
                data-bs-toggle="tab"
                data-bs-target="#user-tab-pane"
                type="button"
                role="tab"
                aria-controls="user-tab-pane"
                aria-selected="true"
              >
                基本資料
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="work-tab"
                data-bs-toggle="tab"
                data-bs-target="#work-tab-pane"
                type="button"
                role="tab"
                aria-controls="work-tab-pane"
                aria-selected="false"
              >
                工作設定
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="user-tab-pane"
              role="tabpanel"
              aria-labelledby="user-tab"
              tabIndex={0}
            >
              <table className="table" style={{ marginTop: "20px" }}>
                <tbody>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#ffcb48",
                        width: "100px",
                        borderRadius: "25px 0 0 0",
                        textAlign: "center",
                      }}
                    >
                      姓名
                    </td>
                    <td id="userName">愛遛狗小姊姊</td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#ffcb48",
                        width: "100px",
                        textAlign: "center",
                      }}
                    >
                      電話
                    </td>
                    <td id="userPhone">0921212122</td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#ffcb48",
                        width: "100px",
                        borderRadius: "0 0 0 25px",
                        textAlign: "center",
                      }}
                    >
                      Email
                    </td>
                    <td id="userEmail">123@gmail</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 工作設定 */}
            <div
              className="tab-pane fade"
              id="work-tab-pane"
              role="tabpanel"
              aria-labelledby="work-tab"
              tabIndex={0}
            >
              <br />
              {/* 服務內容 */}
              <div className="card">
                <div
                  className="card-header"
                  style={{ backgroundColor: "#ffcb48" }}
                >
                  自我介紹
                </div>
                <div className="card-body">
                  <p className="card-text" id="selfIntro" />
                </div>
              </div>
              <br />
              {/* 可服務時間和地區 */}
              <table className="table" style={{ borderRadius: "10px" }}>
                <thead>
                  <tr>
                    <th scope="col" style={{ backgroundColor: "#ffcb48" }}>
                      可接受寵物
                    </th>
                    <th scope="col" style={{ backgroundColor: "#ffcb48" }}>
                      可服務時間
                    </th>
                    <th scope="col" style={{ backgroundColor: "#ffcb48" }}>
                      可服務地區
                    </th>
                    <th scope="col" style={{ backgroundColor: "#ffcb48" }}>
                      可接受體型
                    </th>
                    <th scope="col" style={{ backgroundColor: "#ffcb48" }}>
                      所在地區
                    </th>
                    <th scope="col" style={{ backgroundColor: "#ffcb48" }}>
                      價格
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>犬</td>
                    <td>一,三,五</td>
                    <td>南屯區,太平區</td>
                    <td>五公斤以下</td>
                    <td>台中市南屯區公益路</td>
                    <td>TWD 300/ 次</td>
                  </tr>
                </tbody>
              </table>
              <br />
              {/* slide */}
              <h6>照片專區</h6>
              <div className="scroll-container">
                <img src="/image/girl with dog.jpg" alt="" />
                <img src="/image/girl with dog.jpg" alt="" />
                <img src="/image/girl with dog.jpg" alt="" />
                <img src="/image/girl with dog.jpg" alt="" />
              </div>
            </div>
          </div>
          <br />
          {/* 這是動畫 */}
          <div className="image-container" id="imageContainer"></div>
        </div>
      </main>
    </div>
  );
}

export default UserPage;
