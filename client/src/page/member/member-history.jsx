import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

const History = () => {
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
        <main className="col-md-10" id="memberHistory">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">訂單編號</th>
                <th scope="col">下單日期</th>
                <th scope="col">取貨狀態</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="orderNumber">#254</td>
                <td id="orderDate">2024-09-19</td>
                <td id="logisticsStat">配送中</td>
              </tr>
            </tbody>
          </table>
          {/* 商品明細 */}
          <div className="accordion accordion-flush" id="productAccordion">
            <div className="accordion-item">
              <span className="accordion-header-h">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#productDetails"
                  aria-expanded="false"
                  aria-controls="productDetails"
                >
                  商品明細
                </button>
              </span>
              <div
                id="productDetails"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        {/* 產品名稱 */}
                        <td colSpan={4} className="productName">
                          貓用｜1種肉低敏無膠主食罐*2&nbsp;
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4}>規格</td>
                      </tr>
                      <tr>
                        {/* 自選規格 */}
                        <td className="spec">80g</td>
                        <td className="specPrice">NT200</td>
                      </tr>
                      <tr>
                        {/* 口味 */}
                        <td className="canFlavor">雞肉</td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                  <ColoredLine color="ff6144" />
                  {/* 合計 優惠折扣 */}
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>小計</td>
                        <td className="subtotal" />
                      </tr>
                      <tr>
                        <td>配送方式</td>
                        <td className="logistics" />
                      </tr>
                      <tr>
                        <td style={{ color: "#a52a2a" }}>折扣</td>
                        <td className="discount" />
                      </tr>
                      <tr>
                        <td>付款方式</td>
                        <td className="payment" />
                      </tr>
                      <tr>
                        <td>總計</td>
                        <td className="total" />
                      </tr>
                    </tbody>
                  </table>
                </div>
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

export default History;
