import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const MyRequest = () => {
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
    <div className="wrapper row">
      <Sidebar />
      <main className="col-md-10">
        {/* 進行中訂單區塊 */}
        <div>
          <h5 id="orderInProgress">進行中訂單</h5>
          {/* 進行中card */}
          <div className="card">
            <div
              className="card-header"
              id="requestTitle"
              style={{ backgroundColor: "#ffcb48" }}
            >
              遛狗#123
            </div>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title">時間</h6>
                <p className="card-text" id="requestDate">
                  2024-09-19 至 2024-09-20
                </p>
                <h6 className="card-title">地點</h6>
                <p className="card-text" id="requestLocation">
                  台中市南屯區
                </p>
                <h6 className="card-title">接單者</h6>
                <p className="card-text" id="userInfo">
                  愛遛狗的小姊姊
                </p>
                <h6 className="card-title">狀態</h6>
                <p className="card-text" id="requestStatus">
                  已預約
                </p>
              </div>
              {/* 評分彈窗 */}
              <a href="/member/contact-nanny" className="chatdots">
                <i className="bi bi-chat-dots" />
                <p id="contactBtn1">聯絡保姆</p>
              </a>
            </div>
          </div>
          {/* 進行中訂單查詢按鈕 */}
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn" type="button" id="inProgressbtn">
              查詢更多
            </button>
          </div>
          <br />
          {/* 已完成訂單區塊 */}
          <h5 id="finishedOrder">已完成訂單</h5>
          {/* 已完成card */}
          <div className="card">
            <div
              className="card-header"
              id="FrequestTitle"
              style={{ backgroundColor: "#ffcb48" }}
            >
              遛狗#123
            </div>
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6 className="card-title">時間</h6>
                <p className="card-text" id="FrequestDate">
                  2024-09-19 至 2024-09-20
                </p>
                <h6 className="card-title">地點</h6>
                <p className="card-text" id="FrequestLocation">
                  台中市南屯區
                </p>
                <h6 className="card-title">接單者</h6>
                <p className="card-text" id="userInf">
                  愛遛狗的小姊姊
                </p>
                <h6 className="card-title">狀態</h6>
                <p className="card-text" id="FrequestStatus">
                  已完成
                </p>
              </div>
              {/* 這是評分彈出視窗 */}
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                id="modalbtn"
              >
                評分去
              </button>
              {/* Modal */}
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id="exampleModalLabel"
                        style={{ backgroundColor: "#ffcb48" }}
                      >
                        {/* 訂單編號 */}
                        <span>保姆#456</span>
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    {/* body */}
                    <div className="modal-body">
                      <h6 className="card-title">時間</h6>
                      <p className="card-text" id="FrequestDate">
                        2024-09-19 至 2024-09-20
                      </p>
                      <h6 className="card-title">地點</h6>
                      <p className="card-text" id="FrequestLocation">
                        台中市南屯區
                      </p>
                      <h6 className="card-title">接單者</h6>
                      <p className="card-text" id="userInf">
                        愛遛狗的小姊姊
                      </p>
                      <h6 className="card-title">狀態</h6>
                      <p className="card-text" id="FrequestStatus">
                        已完成
                      </p>
                    </div>
                    <br />
                    <br />
                    {/* 評分 */}
                    <div style={{ display: "inline", textAlign: "center" }}>
                      <p>評分</p>
                      <i className="bi bi-star chat-icon" />
                      <i className="bi bi-star chat-icon" />
                      <i className="bi bi-star chat-icon" />
                      <i className="bi bi-star chat-icon" />
                      <i className="bi bi-star chat-icon" />
                    </div>
                    {/* 評論留言板功能 */}
                    <div className="col">
                      <div className="container mt-5">
                        <form id="messageForm">
                          <div className="form-group">
                            <label htmlFor="message">留言:</label>
                            <textarea
                              className="form-control"
                              id="message"
                              required
                              defaultValue={""}
                            />
                          </div>
                          <br />
                        </form>
                      </div>
                    </div>
                    {/* footer */}
                    <div className="modal-footer">
                      <button type="button" className="btn btn-primary">
                        發表評論
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 已完成訂單查詢按鈕 */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <a
            href="./member-orderscore.html"
            className="btn"
            type="button"
            id="finishedbtn"
          >
            查詢更多
          </a>
        </div>
        {/* 這是動畫 */}
        <div className="image-container" id="imageContainer"></div>
      </main>
    </div>
  );
};

export default MyRequest;
