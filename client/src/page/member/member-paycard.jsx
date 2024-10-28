import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

const PayCard = () => {
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
            <h5>信用卡管理</h5>
            <ColoredLine color="ff6144" />
            {/* card1 */}
            <div className="card w-75 mb-3">
              <div className="card-body">
                <table className="table">
                  <tbody>
                    <tr>
                      <th scope="col">信用卡</th>
                      <th scope="col">1234-56768-0912</th>
                    </tr>
                    <tr>
                      <td>持卡人手機</td>
                      <td>0912-345678</td>
                    </tr>
                    <tr>
                      <td>持卡人姓名</td>
                      <td>愛亮狗小姐姐</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-end">
                  <a
                    href="#"
                    className="btn"
                    style={{ backgroundColor: "#ff6144" }}
                  >
                    修改
                  </a>
                  <a
                    href="#"
                    className="btn"
                    style={{ backgroundColor: "#ffcb48", marginLeft: "5px" }}
                  >
                    儲存
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 這是動畫 */}
          <div className="image-container" id="imageContainer"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default PayCard;
