import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";
import axios from "axios";

const Mission = () => {
  const [missionData, setMissionData] = useState([]);
  const [completeData, setCompleteData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const userId = localStorage.getItem("myUserIDDD");
      const result = await axios.get(`http://localhost:8000/member/mission/${userId}`);
      setMissionData(result.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const userId = localStorage.getItem("myUserIDDD");
      const result = await axios.get(`http://localhost:8000/member/missionComplete/${userId}`);
      setCompleteData(result.data);
    };
    getData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // 根據需要調整格式
  };

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
                {missionData.map((Item) => (
                  <tr>
                    <td className="ComingDate">{formatDate(Item.date)}</td>
                    <td className="period">{Item.time}</td>
                    <td className="times">{Item.frequency}</td>
                    <td className="text-center">
                      <a href="/member/contact-guest">
                        <i
                          className="bi bi-chat-dots chat-icon"
                          style={{ fontSize: " 2rem", color: "black" }}
                        />
                      </a>
                    </td>
                  </tr>
                ))}
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
                {completeData.map((Item1) => (
                  <tr>
                    <td className="finishDate">{formatDate(Item1.date)}</td>
                    <td className="period">{Item1.time}</td>
                    <td className="times">{Item1.frequency}</td>
                    <td className="text-center rating">
                      <span class="star" data-value="1">
                        ★
                      </span>
                      <span class="star" data-value="2">
                        ★
                      </span>
                      <span class="star" data-value="3">
                        ★
                      </span>
                      <span class="star" data-value="4">
                        ★
                      </span>
                      <span class="star" data-value="5">
                        ★
                      </span>
                    </td>
                  </tr>
                ))}
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
