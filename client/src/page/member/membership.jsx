import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.jsx";
import "../../style/member.css";

const MemberMain = () => {
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
      {
        src: "/svg/greeting.svg",
        alt: "greeting Icon",
        className: "animate__animated animate__slideInDown left-top",
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
      {/* 置入sidebar */}
      <div className="wrapper row">
        <Sidebar />
        <main className="col-md-10">
          <div>
            <div className="marquee-content">
              <marquee SCROLLAMOUNT="8" LOOP="0">
                您的帳號控制台裡，您可以檢視近期的訂單，管理您的收貨地址，您可以更改密碼或修改帳號資料。
                您的帳號控制台裡，您可以檢視近期的訂單，管理您的收貨地址，您可以更改密碼或修改帳號資料。
                您的帳號控制台裡，您可以檢視近期的訂單，管理您的收貨地址，您可以更改密碼或修改帳號資料。
              </marquee>
            </div>
            {/* logo背景 */}
            <div id="logocontainer">
              <img src="/image/logo2.png" alt="logo" id="logobg" />
              <img src="/image/LOGO.png" alt="logo" id="logobg2" />
            </div>
            {/* 這是動畫 */}
            <div className="image-container" id="imageContainer"></div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default MemberMain;
