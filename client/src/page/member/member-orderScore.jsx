import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

const Score = () => {
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
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "#ffcb48" }}
              >
                <img
                  src="/image/girl with dog.jpg"
                  alt=""
                  className="circle-image"
                />
                <span id="guestName">客戶名字</span>
              </div>
              <div className="card-body">
                <span className="card-text">
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
                          <p>尚未評分</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </span>
              </div>
            </div>
            <br />
            {/* 第二張 */}
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "#ffcb48" }}
              >
                <img
                  src="/image/girl with dog.jpg"
                  alt=""
                  className="circle-image"
                />
                <span id="guestName">客戶名字</span>
              </div>
              <div className="card-body">
                <span className="card-text">
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
                          {/* <ChatDots color="royalblue" size={32} /> */}
                          <i className="bi bi-star chat-icon" />
                          <i className="bi bi-star chat-icon" />
                          <i className="bi bi-star chat-icon" />
                          <i className="bi bi-star chat-icon" />
                          <i className="bi bi-star chat-icon" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </span>
              </div>
            </div>
            {/* 這是動畫 */}
            <div className="image-container" id="imageContainer"></div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Score;
