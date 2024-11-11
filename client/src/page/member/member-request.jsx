import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

function MyRequest() {
  const [requestData, setRequestData] = useState([]);
  const [completeData, setCompleteData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const userId = localStorage.getItem("myUserIDDD");
      const result = await axios.get(`http://localhost:8000/member/request/${userId}`);
      setRequestData(result.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const userId = localStorage.getItem("myUserIDDD");
      const result = await axios.get(`http://localhost:8000/member/requestComplete/${userId}`);
      setCompleteData(result.data);
    };
    getData();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // 根據需要調整格式
  };


  const [requests, setRequests] = useState({
    ongoing: {
      orderTime: "2024-09-19 至 2024-09-20",
      orderLocation: "台中市南屯區",
      userInfo: "愛遛狗的小姊姊",
      requestStatus: "已預約",
      orderNumber: "#123",
    },
    completed: {
      orderTime: "2024-09-19 至 2024-09-20",
      orderLocation: "台中市南屯區",
      userInfo: "愛遛狗的小姊姊",
      requestStatus: "已完成",
      orderNumber: "#123",
    },
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
    <div className="wrapper row">
      <Sidebar />
      <main className="col-md-10">
        {/* 進行中訂單區塊 */}
        <div>
          <h5 id="orderInProgress">進行中訂單</h5>
          <div className="card">
            {requestData.map((Item) => (
              <div key={Item.id} className="card-header orderNumber">
                訂單編號{Item.walking_order}
              </div>
            ))}
            <div className="card-body d-flex justify-content-between align-items-center">
              {requestData.map((Item) => (
                <div key={Item.id}> {/* 假設每個 Item 有唯一的 id */}
                  <h6 className="card-title">時間</h6>
                  <p className="card-text">{formatDate(Item.walking_date)} 至 {formatDate(Item.end_date)}</p>
                  <h6 className="card-title">地點</h6>
                  <p className="card-text">{Item.walking_location}</p>
                  <h6 className="card-title">接單者</h6>
                  <p className="card-text">{Item.nanny_name}</p>
                  <h6 className="card-title">狀態</h6>
                  <p className="card-text">{Item.state}</p>
                </div>
              ))}
              <a href="/member/contact-nanny" className="chatdots">
                <i
                  className="bi bi-chat-dots"
                  style={{ fontSize: "2rem", color: "black" }}
                />
                <p
                  style={{
                    fontSize: "1rem",
                    color: "black",
                    marginRight: "20px",
                  }}
                >
                  聯絡保姆
                </p>
              </a>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn" type="button" id="searchbtn1">
              查詢更多
            </button>
          </div>
          <br />
          {/* 已完成訂單區塊 */}
          <h5 id="finishedOrder">已完成訂單</h5>
          <div className="card">
            {completeData.map((Item1) => (
              <div key={Item1.id} className="card-header orderNumber">
                訂單編號{Item1.walking_order}
              </div>
            ))}
            <div className="card-body d-flex justify-content-between align-items-center">
              {completeData.map((Item1) => (
                <div key={Item1.id}> {/* 假設每個 Item1 有唯一的 id */}
                  <h6 className="card-title">時間</h6>
                  <p className="card-text">{formatDate(Item1.walking_date)} 至 {formatDate(Item1.end_date)}</p>
                  <h6 className="card-title">地點</h6>
                  <p className="card-text">{Item1.walking_location}</p>
                  <h6 className="card-title">接單者</h6>
                  <p className="card-text">{Item1.nanny_name}</p>
                  <h6 className="card-title">狀態</h6>
                  <p className="card-text">{Item1.state}</p>
                </div>
              ))}
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#ratingModal"
                id="scorebtn"
              >
                評分去
              </button>
              {/* 評分彈窗 */}
              {completeData.map((Item1) => (
                <div
                  className="modal fade"
                  id="ratingModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">訂單編號{Item1.walking_order}</h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <h6 className="card-title">時間</h6>
                        <p className="card-text">
                          {formatDate(Item1.walking_date)} 至 {formatDate(Item1.end_date)}
                        </p>
                        <h6 className="card-title">地點</h6>
                        <p className="card-text">
                          {Item1.walking_location}
                        </p>
                        <h6 className="card-title">接單者</h6>
                        <p className="card-text">{Item1.nanny_name}</p>
                        <h6 className="card-title">狀態</h6>
                        <p className="card-text">
                          {Item1.state}
                        </p>
                        <div className="text-center rating">
                          <p>評分</p>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="star" data-value={star}>
                              ★
                            </span>
                          ))}
                        </div>
                        <div className="col">
                          <form id="messageForm">
                            <div className="form-group">
                              <label htmlFor="message">留言:</label>
                              <textarea
                                className="form-control"
                                id="message"
                                required
                              />
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary">
                          發表評論
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <a href="./member-orderscore.html" className="btn" id="searchbtn2">
            查詢更多
          </a>
        </div>
        <div className="image-container" id="imageContainer"></div>
      </main>
    </div>
  );
}

export default MyRequest;
