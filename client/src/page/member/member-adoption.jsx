import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

const Adoption = () => {
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

    });
  }, []);

  return (
    <React.Fragment>
      {/* 置入sidebar */}
      <div className="wrapper row">
        <Sidebar />
        <main className="col-md-10">
          <div>
            <h5>領養寶貝</h5>
            <ColoredLine color="ff6144" />
            {/* 領養表單*/}
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <img
                      src="/image/大頭照.png"
                      alt=""
                      className="circle-image"
                    />
                  </td>
                  <td className="hairColor">虎斑</td>
                  <td className="gender">
                    <i className="bi bi-gender-female" />
                  </td>
                  <td className="adoptStatus">開放領養中</td>
                  <td>
                    <button type="button" id="progressTrack1">
                      進度追蹤
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* 這是動畫 */}
            <div className="image-container" id="imageContainer"></div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Adoption;
