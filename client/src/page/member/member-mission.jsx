import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

const Mission = () => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: `#${color}`,
        backgroundColor: `#${color}`,
        height: 3,
        margin: 10,
      }}
    />
  );
  useEffect(() => {
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

      window.onload = function () {
        const sidebar = document.querySelector(".nav");
        sidebar.classList.add("animate__animated", "animate__fadeInLeft");
      };
    });
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper row">
        <Sidebar />
        <main className="col-md-10">
          <div>
            <h5>工作管理</h5>
            <ColoredLine color="ff6144" />
            {/* 即將到來工作任務 */}
            <p style={{ marginTop: "20px" }}>即將到來</p>
            <table className="table" id="missionTable">
              <thead>
                <tr>
                  <th>日期</th>
                  <th>期間</th>
                  <th>次數</th>
                  <th className="text-center">聯絡飼主</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024</td>
                  <td>13:00</td>
                  <td>2</td>
                  <td className="text-center">
                    <a href="./member-contactGuest.html">
                      <i className="bi bi-chat-dots chat-icon" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* 已完成工作 */}
            <p style={{ marginTop: "20px" }}>已完成訂單</p>
            <table className="table">
              <thead>
                <tr>
                  <th>日期</th>
                  <th>期間</th>
                  <th>次數</th>
                  <th className="text-center">評價</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024</td>
                  <td>13:00</td>
                  <td>2</td>
                  <td className="text-center">
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th>日期</th>
                  <th>期間</th>
                  <th>次數</th>
                  <th className="text-center">評價</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024</td>
                  <td>13:00</td>
                  <td>2</td>
                  <td className="text-center">
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
            {/* 已完成3 */}
            <table className="table">
              <thead>
                <tr>
                  <th>日期</th>
                  <th>期間</th>
                  <th>次數</th>
                  <th className="text-center">評價</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024</td>
                  <td>13:00</td>
                  <td>2</td>
                  <td className="text-center">
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                    <i className="bi bi-star chat-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
            {/* 已完成訂單查詢按鈕 */}
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <a
                href="./member-orderscore.html"
                className="btn"
                type="button"
                id="finishedbtn"
              >
                查詢更多
              </a>
            </div>
            {/* 這是動畫 */}
            <div className="image-container" id="imageContainer"></div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Mission;
