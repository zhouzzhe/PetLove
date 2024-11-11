import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";
import axios from "axios";

const JoinUs = () => {
  useEffect(() => {
    const text = document.getElementById("imageText");
    const content = text.innerText;
    text.innerText = "";

    let index = 0;
    const speed = 150;

    const type = () => {
      if (index < content.length) {
        text.innerText += content.charAt(index);
        index++;
        setTimeout(type, speed);
      } else {
        console.log("failed");
      }
    };
    type();

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
          {/* 頁頭圖片 */}
          <div className="image-container">
            <img src="/image/terms.jpg" alt="failed" className="fixed-image" />
            <div className="overlay-text">
              <span id="imageText">成為寵樂的服務夥伴</span>
            </div>
          </div>
          <br />
          <br />
          {/* card */}
          <div className="card" id="card1">
            <div className="card-header" style={{ backgroundColor: "#ff6144" }}>
              作為寵樂夥伴的優勢
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <ul>
                  <li>自由選擇您的計劃、服務和報價</li>
                  <li>您的服務將被分配給附近的寵物父母</li>
                  <li>我們將替您管理寵物家長的預訂和要求</li>
                  <li>簡單可靠的支付系統</li>
                </ul>
              </blockquote>
            </div>
          </div>
          <br />
          <div className="card" id="card2">
            <div className="card-header" style={{ backgroundColor: "#ff6144" }}>
              一旦與我們合作成為保姆, 你必須:
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <ul>
                  <li>以友好和專業的方式親自交付您承諾的服務</li>
                  <li>快速和專業的回應 (24 小時以內) 客戶的諮詢和預訂請求</li>
                  <li>保持活躍和您的帳戶更新</li>
                  <li>確認您在法律上能夠在您所在的司法轄區提供寵物服務</li>
                </ul>
              </blockquote>
            </div>
          </div>
          <br />
          <br />
          <span id="joinpageBtn">
            <a href="/member/become-nanny" className="btn" id="joinNanny">
              成為保姆夥伴
            </a>
          </span>
          {/* 可愛的小貓 */}
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/image/lookupcat.jpg" alt="failed" />
          </div> */}
          {/* 這是動畫 */}
          <div className="image-container" id="imageContainer"></div>
        </div>
      </main>
    </div>
  );
};

export default JoinUs;
