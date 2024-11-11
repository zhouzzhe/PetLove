import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";
import axios from "axios";

const Payment = () => {
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
            <div className="btn" id="addBtn">
              <a href="/member/card-add" style={{ textDecoration: "none" }}>
                新增付款方式
              </a>
            </div>
            <br />
            <br />
            <div
              className="card-body d-flex justify-content-between align-items-center"
              id="payCardbody"
            >
              <div style={{ padding: "10px 20px" }}>
                <p className="card-title">信用卡</p>
                <div className="card-number">XXXX-XXXX-XXXX-XXXX</div>
              </div>
              <a href="#" className="btn btn-management">
                管理
              </a>
            </div>
          </div>
          {/* 這是動畫 */}
          <div className="image-container" id="imageContainer"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Payment;
