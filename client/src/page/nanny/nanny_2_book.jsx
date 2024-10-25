import React from "react";
import "../../style/nanny_2_book.css"

function NannyBook() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <img
              src="/image/南瓜.jpg"
              alt="大圖片"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-5">
            <div className="row g-3">
              <div className="col-6">
                <img
                  src="/image/南瓜.jpg"
                  alt="小圖片1"
                  className="img-fluid mb-1 rounded"
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-6">
                <img
                  src="/image/南瓜.jpg"
                  alt="小圖片1"
                  className="img-fluid mb-1 rounded"
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-6">
                <img
                  src="/image/南瓜.jpg"
                  alt="小圖片1"
                  className="img-fluid mb-1 rounded"
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-6">
                <img
                  src="/image/南瓜.jpg"
                  alt="小圖片1"
                  className="img-fluid mb-1 rounded"
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-6">
                <img
                  src="/image/南瓜.jpg"
                  alt="小圖片1"
                  className="img-fluid mb-1 rounded"
                  style={{ width: "90%" }}
                />
              </div>
              <div className="col-6">
                <img
                  src="/image/南瓜.jpg"
                  alt="小圖片1"
                  className="img-fluid mb-1 rounded"
                  style={{ width: "90%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="nannyName">
            <p>愛貓小姐姐</p>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div>
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
              </div>
              <p style={{ padding: "2px 0 0 15px" }}>155則評論</p>
            </div>
            <div className="d-flex">
              <p className="me-2">距離0.8公里</p>
              <p>300元</p>
            </div>
          </div>
        </div>
        <div className="introduce">
          <p>自介</p>
        </div>
        <div>
          <div className="fw-bold fs-3">
            <p>到府服務</p>
          </div>
          <div className="d-flex flex-column ">
            <div className="mt-5 mb-4">
              <p className="fw-bold fs-3">可接受寵物</p>
              <p>貓，狗</p>
            </div>
            <div className="mb-4">
              <p className="fw-bold fs-3">可服務時間</p>
              <p>周一，二，三</p>
            </div>
            <div className="mb-4">
              <p className="fw-bold fs-3">可服務地區</p>
              <p>台中市 : 東區，中區</p>
            </div>
            <div className="mb-4">
              <p className="fw-bold fs-3">可接受體型</p>
              <p>迷你，小型，中型</p>
            </div>
          </div>
        </div>
        <div className="contactAndGetPrice">
          <button id="contact" className="btn">
            聯絡保母
          </button>
          <button id="getPrice" className="btn">
            獲取報價
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default NannyBook;
