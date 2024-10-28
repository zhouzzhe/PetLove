import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

const BecomeWalker = () => {
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
      {
        src: "/svg/doggreet.svg",
        alt: "doggreet Icon",
        className: "animate__animated animate__slideInDown left-top",
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
    <div className="wrapper row">
      <Sidebar />
      <main className="col-md-10" style={{ position: "relative" }}>
        <div>
          {/* form */}
          <div className="card">
            <h5 className="card-header" style={{ backgroundColor: "#ffcb48" }}>
              成為夥伴(遛狗者ver.)
            </h5>
            <div className="card-body">
              {/* 1. */}
              <p className="card-title">可接受寵物</p>
              <span className="card-text">
                {/* checkbox */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  狗
                </label>
                {/* checkbox */}
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  貓
                </label>
              </span>
              <div className="card-body d-flex justify-content-between align-items-center">
                {/* 2. */}
                <div style={{ marginLeft: "-15px" }}>
                  <p className="card-title">可服務時間</p>
                  <span>
                    {/* checkbox */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      星期一
                    </label>
                  </span>
                  {/* checkbox */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    星期二
                  </label>
                  {/* checkbox */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    星期三
                  </label>
                  {/* checkbox */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    星期四
                  </label>
                  {/* checkbox */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    星期五
                  </label>
                  {/* checkbox */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    星期六
                  </label>
                  {/* checkbox */}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    星期日
                  </label>
                  <br />
                  <br />
                  {/* select */}
                  <p className="card-title">可服務地區</p>
                  <input
                    className="js-demeter-tw-zipcode-selector"
                    data-city="#city"
                    data-dist="#dist"
                    placeholder="請輸入郵遞區號"
                  />
                  <select id="city" placeholder="請選擇縣市" />
                  <select id="dist" placeholder="請選擇鄉鎮區" />
                  <br />
                  <br />
                  <p className="card-title">所在地區</p>
                  <input
                    className="js-demeter-tw-zipcode-selector"
                    data-city="#city1"
                    data-dist="#dist1"
                    placeholder="請輸入郵遞區號"
                  />
                  <select id="city1" placeholder="請選擇縣市" />
                  <select id="dist1" placeholder="請選擇鄉鎮區" />
                  <br />
                  <br />
                  <p className="card-title">可接受體型</p>
                  <span className="card-text">
                    {/* checkbox */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      1-5公斤
                    </label>
                    {/* checkbox */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      5-10公斤
                    </label>
                    {/* checkbox */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      10-15公斤
                    </label>
                    {/* checkbox */}
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      15-20公斤
                    </label>
                  </span>
                  <br />
                  <br />
                  <p className="card-title">服務價格</p>
                  <input type="text" id="sevicePrice" className="sevicePrice" />
                  <label htmlFor="sevicePrice" />
                  TWD
                  <div id="emailHelp" className="form-text">
                    平均價格為TWD300/天
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <button className="saveBtn" type="submit" id="saveBtn">
            儲存設定
          </button>
          {/* 這是動畫 */}
          <div className="image-container" id="imageContainer" />
        </div>
      </main>
    </div>
  );
};

export default BecomeWalker;
