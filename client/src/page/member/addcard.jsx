import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

const CardAdd = () => {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: `#${color}`,
        backgroundColor: `#${color}`,
        height: 4,
        margin: 1,
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
            <h5>新增付款方式</h5>
            <ColoredLine color="ff6144" />
            <form>
              <div className="mb-3">
                <label htmlFor="userCard" className="form-label">
                  信用卡
                </label>
                <input type="text" className="form-control" id="userCard" />
                <div id="userCard" className="form-text"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  持卡人姓名
                </label>
                <input type="text" className="form-control" id="userName" />
              </div>
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#ffcb48" }}
              >
                新增付款方式
              </button>
            </form>
            {/* 這是動畫 */}
            <div className="image-container" id="imageContainer"></div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default CardAdd;
