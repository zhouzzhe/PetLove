import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";
import axios from "axios";

function History() {
  const [orderData, setOrderData] = useState([]);
  const [order_details, setorder_details] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const userId = localStorage.getItem("myUserIDDD");
      const result = await axios.get(`http://localhost:8000/member/history/${userId}`);
      console.log('/member/history/某user:', result.data); // result.data 應該要是陣列
      setOrderData(result.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getDetails = async () => {
      const userId = localStorage.getItem("myUserIDDD");
      const result = await axios.get(`http://localhost:8000/member/historyDetails/${userId}`);
      setorder_details(result.data);
      console.log(result.data);
    };
    getDetails();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // 根據需要調整格式
  };


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
              {orderData.map((Item) => (
                <tr>
                  <td>{Item.order_id}</td>
                  <td>{formatDate(Item.order_date)}</td>
                  <td>{Item.pickup_status}</td>
                </tr>
              ))}
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
                      {order_details.map((Item1) => (
                        <React.Fragment key={Item1.id}> {/* 確保每個 React.Fragment 有唯一 key */}
                          <tr>
                            <td colSpan={4} className="product_name">{Item1.product_name}</td>
                          </tr>
                          <tr>
                            <td colSpan={4} className="product_specification">規格</td>
                          </tr>
                          <tr>
                            <td className="product_weight">{Item1.product_specification}</td>
                            <td className="product_price">NT{Item1.product_price}</td>
                          </tr>
                          <tr>
                            <td className="product_category">{Item1.product_category}</td>
                            <td />
                          </tr>
                          {/* 每個 Item1 後增加合計等信息 */}
                          <ColoredLine color="ff6144" />
                          <table className="table table-borderless">
                            <tbody>
                              <tr>
                                <td colSpan={4}>小計</td>
                                <td className="subtotal">NT{Item1.subtotal}</td>
                              </tr>
                              <tr>
                                <td colSpan={4}>配送方式</td>
                                <td className="delivery_method">{Item1.delivery_method}</td>
                              </tr>
                              <tr>
                                <td colSpan={4} style={{ color: "#a52a2a" }}>折扣</td>
                                <td className="discount" style={{ color: "#a52a2a" }}>{Item1.discount}</td>
                              </tr>
                              <tr>
                                <td colSpan={4}>付款方式</td>
                                <td className="payment_method">{Item1.payment_method}</td>
                              </tr>
                              <tr>
                                <td colSpan={4}>總計</td>
                                <td className="total_amount">NT{Item1.total_amount}</td>
                              </tr>
                            </tbody>
                          </table>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                  <ColoredLine color="ff6144" />
                  {/* 合計 優惠折扣 */}
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
