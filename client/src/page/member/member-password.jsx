import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

const PassWord = () => {
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
              <h5
                className="card-header text-center"
                id="card-header"
                style={{ backgroundColor: "#ffcb48" }}
              >
                <span>更改密碼</span>
              </h5>
              <div className="card-body">
                <p className="card-title">輸入新密碼</p>
                <p className="card-text">
                  <input
                    className="input"
                    type="password"
                    placeholder="請輸入最少8個字元含數字和英文大小寫"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  />
                </p>
                <br />
                <p className="card-title">確認密碼</p>
                <p className="card-text">
                  <input type="password" placeholder="請再次輸入密碼" />
                </p>
                <br />
                <button className="confirmBtn">更改確認</button>
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

export default PassWord;
