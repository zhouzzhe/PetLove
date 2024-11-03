import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

function History() {
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

  const [orderDetails, setOrderDetails] = useState({
    orderNumber: "#254",
    orderDate: "2024-09-19",
    logisticsStat: "配送中",
    products: [
      {
        name: "貓用｜1種肉低敏無膠主食罐*2",
        weight: "80g",
        price: "NT200",
        category: "雞肉",
      },
    ],
    subtotal: "NT400",
    deliveryMethod: "宅配",
    discount: "NT50",
    paymentMethod: "信用卡",
    totalAmount: "NT350",
  });

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

      document.getElementById("imageContainer").appendChild(imgElement);
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
                <td>{orderDetails.orderNumber}</td>
                <td>{orderDetails.orderDate}</td>
                <td>{orderDetails.logisticsStat}</td>
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
                      {orderDetails.products.map((product, index) => (
                        <React.Fragment key={index}>
                          <tr>
                            <td colSpan={4} className="product_name">
                              {product.name}
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="product_specification">
                              規格
                            </td>
                          </tr>
                          <tr>
                            <td className="product_weight">{product.weight}</td>
                            <td className="product_price">{product.price}</td>
                          </tr>
                          <tr>
                            <td className="product_category">
                              {product.category}
                            </td>
                            <td />
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                  <ColoredLine color="ff6144" />
                  {/* 合計 優惠折扣 */}
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td colSpan={4}>小計</td>
                        <td className="subtotal">{orderDetails.subtotal}</td>
                      </tr>
                      <tr>
                        <td colSpan={4}>配送方式</td>
                        <td className="delivery_method">
                          {orderDetails.deliveryMethod}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4} style={{ color: "#a52a2a" }}>
                          折扣
                        </td>
                        <td className="discount" style={{ color: "#a52a2a" }}>
                          {orderDetails.discount}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4}>付款方式</td>
                        <td className="payment_method">
                          {orderDetails.paymentMethod}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4}>總計</td>
                        <td className="total_amount">
                          {orderDetails.totalAmount}
                        </td>
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
}

export default History;
