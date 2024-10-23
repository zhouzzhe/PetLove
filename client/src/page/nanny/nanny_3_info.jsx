import React from "react";
import "../../style/nanny_3_info.css"

function NannyInfo() {
  return (
    <React.Fragment>
      <a href className="backPage">
        <img src="./img/arrow.png" className="mx-5" alt="" />
      </a>
      <div className="nanny d-flex">
        <div className="nannyPic col-2">
          <img src="/image/南瓜.jpg" className="img-fluid" alt="保母照片" />
        </div>
        <div className="nameStar mx-5">
          <div className="nannyName">
            <p>愛貓小姐姐</p>
          </div>
          <div className="startAndComment">
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
          </div>
        </div>
      </div>
      <div className="container d-flex flex-column align-items-center">
        <div className="col-9">
          <form className="reserveForm">
            <div className="d-flex justify-content-around mb-3">
              <button
                type="button"
                className="custom-button rounded-pill p-2 w-25"
              >
                小貓貓
              </button>
              <button
                type="button"
                className="custom-button rounded-pill p-2 w-25"
              >
                小狗狗
              </button>
            </div>
            <div className="mb-3 text-center">
              <p>預約日期</p>
              <div className="mb-5 text-center d-flex flex-row justify-content-between ">
                <select className="text-center custom-color w-50 my-2">
                  <option value>2024/11/01</option>
                </select>
                <p className="px-3 pt-3">至</p>
                <select className="text-center custom-color w-50 my-2">
                  <option value>2024/11/01</option>
                </select>
              </div>
            </div>
            <div className="mb-5 text-center d-flex flex-column">
              <p>每日照顧時間</p>
              <select className="text-center custom-color">
                <option value={1}>1小時</option>
              </select>
            </div>
            <div className="mb-5 text-center d-flex flex-column">
              <p>每日次數</p>
              <select className="text-center custom-color">
                <option value={2}>2次</option>
              </select>
            </div>
            <div className="mb-5 text-center d-flex flex-column">
              <p>地點</p>
              <input
                type="text"
                placeholder="請輸入地址"
                className="text-center custom-color"
              />
            </div>
            <div className="mb-5 text-center d-flex flex-column">
              <p>備註</p>
              <input
                type="text"
                placeholder="請輸入備註"
                className="text-center custom-color"
              />
            </div>
          </form>
        </div>
        <div className="Subtotal mt-5 p-3">
          <p>小計 : </p>
          <div className="d-flex justify-content-between px-3">
            <p>天數</p>
            <p>6天</p>
          </div>
          <div className="d-flex justify-content-between px-3">
            <p>時間</p>
            <p>*6</p>
          </div>
          <div className="d-flex justify-content-between px-3">
            <p>次數</p>
            <p>*2</p>
          </div>
        </div>
        <div className="total d-flex justify-content-between">
          <p>總金額 : </p>
          <p>$7200NTD</p>
        </div>
        <div className="submitRequest">
          <button>送出請求</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NannyInfo