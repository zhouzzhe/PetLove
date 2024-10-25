import React, { useState } from "react";
import axios from "axios";

function WalkingId() {
  const [data, setData] = useState([
    {
      user_id: 1,
      userPhoto: "/image/皇后瑪格2021.png",
      user_name: "井口理",
      user_price: "5000",
      user_intro: "你好我是誰誰誰",
      acceptable_pets: "貓狗",
      acceptable_bodytype: "20公斤以下",
      service_time: "一二四",
      service_place: "西區西屯區",
      evaluate: 3,
    },
  ]);

  return (
    <React.Fragment>
      <div className="position-relative mt-5">
        <div></div>

        <div className="container">
          <div className="row d-flex border border-3 border-danger rounded-3 p-2 my-5">
            <div className="col-3">
              <img
                className="bg-info rounded-circle"
                src="/image/皇后瑪格2021.png"
                alt="...loading"
                style={{ width: "300px", height: "300px" }}
              ></img>
            </div>
            <div className="col-3 d-grid p-5 align-items-center">
              <div className="fs-3 fw-bold">{data[0].user_name}</div>
              <div>{Array(data[0].evaluate).fill("⭐")}</div>
              <div className="" style={{ color: "gray" }}>
                3分鐘前上線
              </div>
            </div>
            <div className="col-3 text-center my-auto fs-5">
              NTD{data[0].user_price}/次
            </div>
            <div className="col-3 d-flex flex-column justify-content-center align-items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="66"
                viewBox="0 0 70 66"
                fill="none"
              >
                <path
                  d="M11.7162 48.0363C12.1704 48.4921 12.5183 49.0425 12.7354 49.6482C12.9524 50.254 13.0332 50.9001 12.9719 51.5406C12.6636 54.5049 12.0807 57.4342 11.2306 60.2906C17.3337 58.8775 21.0613 57.2412 22.7544 56.3838C23.7147 55.8974 24.8206 55.7821 25.8606 56.06C28.8413 56.8578 31.9144 57.2579 35 57.25C52.4825 57.25 65.625 44.9694 65.625 31C65.625 17.0306 52.4825 4.75 35 4.75C17.5175 4.75 4.375 17.035 4.375 31C4.375 37.4225 7.07438 43.3812 11.7162 48.0363ZM9.55937 65.1206C8.52275 65.3259 7.48282 65.514 6.44 65.685C5.565 65.825 4.9 64.915 5.24563 64.1012C5.63305 63.1847 5.98909 62.2552 6.31312 61.3144L6.32625 61.2706C7.41125 58.1206 8.295 54.4981 8.61875 51.125C3.25063 45.7438 0 38.7 0 31C0 14.0863 15.6712 0.375 35 0.375C54.3288 0.375 70 14.0863 70 31C70 47.9137 54.3288 61.625 35 61.625C31.5333 61.6327 28.0807 61.1826 24.7319 60.2863C22.4569 61.4369 17.5612 63.5325 9.55937 65.1206Z"
                  fill="black"
                />
              </svg>
              <div>預約保母</div>
            </div>
          </div>

          <div>
            <div className="row">
              <div className="col-12 border border-3 border-danger rounded-top-3 p-2">
                {data[0].user_intro}
                <img
                  src=""
                  alt=""
                  style={{ width: "1200px", height: "400px" }}
                ></img>
              </div>
            </div>
            <div className="row text-center border border-3 border-danger rounded-bottom-3 p-5 bg-warning">
              <div className="col-3">
                <div className="fs-3 fw-bold">可接受寵物</div>
                <div className="fs-5">{data[0].acceptable_pets}</div>
              </div>
              <div className="col-3">
                <div className="fs-3 fw-bold">可接受體型</div>
                <div className="fs-5">{data[0].acceptable_bodytype}</div>
              </div>
              <div className="col-3">
                <div className="fs-3 fw-bold">可服務時間</div>
                <div className="fs-5">{data[0].service_time}</div>
              </div>
              <div className="col-3">
                <div className="fs-3 fw-bold">可服務地區</div>
                <div className="fs-5">{data[0].service_place}</div>
              </div>
            </div>
          </div>

          <div className="position-relative mx-3 my-5">
            <div className="row justify-content-between m-auto px-3 py-1 border align-items-center">
              <div className="col-2 text-center bg-warning px-3 py-1">
                新用戶限定
              </div>
              <div className="col-8">
                限量首次下訂優惠「#PetLove100」服務立即折抵$100
                ，數量有限，立即領取優惠、預約寵物保姆！
              </div>
              <div className="col-2 d-flex justify-content-center">
                <button className="btn btn-danger">立即領取</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default WalkingId;
