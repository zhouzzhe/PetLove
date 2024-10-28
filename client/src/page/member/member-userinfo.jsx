import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

const UserInfo = () => {
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
    <div class="wrapper row">
      <main className="col-md-10">
        <div>
          <div className="card">
            <h5 className="card-header">基本資料</h5>
            <div className="card-body">
              <p className="card-title">名稱</p>
              <p className="card-text">
                <input type="text" />
              </p>
              <br />
              <p className="card-title">手機</p>
              <p className="card-text">
                <input type="tel" />
              </p>
              <div className="card-body d-flex justify-content-between align-items-center">
                {/* 用margin-left對齊 */}
                <div style={{ marginLeft: "-15px" }}>
                  <p className="card-title">電子郵件</p>
                  <input type="email" />
                </div>
                <a href className="btn" id="verifybtn">
                  驗證信箱
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          {/* 快速登錄 */}
          <h5 style={{ marginLeft: "5px" }}>快速登錄</h5>
          <br />
          <button className="saveBtn">儲存設定</button>
        </div>
      </main>
    </div>
  );
};

export default UserInfo;
