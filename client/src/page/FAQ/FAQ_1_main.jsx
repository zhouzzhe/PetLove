import React, { Component } from "react";
// import { Outlet } from "react-router-dom";
import axios from "axios";

class FAQMain extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="position-relative mt-5">
          <div className="position-relative my-5">&nbsp;</div>
          <div className="d-flex justify-content-center w-100 fs-2 py-5 ">
            常見問題
          </div>

          <div
            className="accordion d-grid gap-4 w-75 m-auto"
            id="accordionPanelsStayOpenExample"
          >
            <div className="accordion-item">
              <h2
                className="accordion-header rounded-top"
                id="panelsStayOpen-headingOne"
              >
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                  style={{ backgroundColor: "#FFCB48" }}
                >
                  如何開始
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <div className="fs-5 my-3">寵樂是什麼</div>
                  <div className="ps-5">
                    寵樂提供配對服務，使毛孩主人可以輕鬆找到離家最近、最優惠的價格，以及最值得信任的保姆。
                  </div>
                </div>
                <div className="accordion-body">
                  <div className="fs-5 my-3">我的寵物適合用寵樂嗎</div>
                  <div className="ps-5">
                    若您的寵物有攻擊性，不建議使用寵樂平台。
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-top">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                  style={{ backgroundColor: "#FFCB48" }}
                >
                  預定照顧和家庭拜訪
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <div className="fs-5 my-3">怎麼對保姆留評論或評分</div>
                  <div className="ps-5">
                    當該次服務結束後即可留下評論或評分。
                  </div>
                </div>
                <div className="accordion-body">
                  <div className="fs-5 my-3">怎麼取消預訂和收到退款</div>
                  <div className="ps-5">
                    如果您在預訂的服務期間之前或期間取消預訂，我們將根據服務供應商在https://petlove.com服務中選擇的取消時間退還費用。
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item rounded-top">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed rounded-top"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                  style={{ backgroundColor: "#FFCB48" }}
                >
                  付款
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <div className="fs-5 my-3">怎麼付款預訂</div>
                  <div className="ps-5">
                    <ol>
                      <li>與保姆聯繫確定服務合適</li>
                      <li>於訊息內點擊訂單，或點選 訂單 圖示後找到該訂單</li>
                      <li>點擊 立即付款 付款並確定預約</li>
                    </ol>
                  </div>
                </div>
                <div className="accordion-body">
                  <div className="fs-5 my-3">有哪些付款方式</div>
                  <div className="ps-5">
                    線上信用卡付款、轉帳付款（需要與保姆索取平台匯款資料）。
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center m-5 fs-3 align-items-center">
            <div className="text-danger">還有其他疑問嗎？歡迎</div>
            <button className="btn btn-danger ms-3 fs-3 rounded-pill p-3">
              聯絡我們
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FAQMain;
