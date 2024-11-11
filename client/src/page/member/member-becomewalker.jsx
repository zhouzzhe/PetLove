import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";
import axios from "axios";

function BecomeWalker() {
  const [formData, setFormData] = useState({
    category: [],
    weekday: [],
    city: "",
    location: "",
    weight: [],
    servicePrice: "",
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const values = prev[name] || [];
        return {
          ...prev,
          [name]: checked
            ? [...values, value]
            : values.filter((v) => v !== value),
        };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // checkbox
  const renderCheckboxes = (options, name) => {
    return options.map((option, index) => (
      <span key={index}>
        <input
          className="form-check-input"
          type="checkbox"
          name={name}
          value={option}
          id={`${name}-${index}`}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor={`${name}-${index}`}>
          {option}
        </label>
      </span>
    ));
  };

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
    });
  }, []);

  return (
    <div className="wrapper row">
      <Sidebar />
      <main className="col-md-10" style={{ position: "relative" }}>
        <div>
          <div className="card">
            <h5 className="card-header" style={{ backgroundColor: "#ffcb48" }}>
              成為夥伴(遛狗者ver.)
            </h5>
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <p className="card-title">可接受寵物</p>
                <span className="card-text">
                  {renderCheckboxes(["狗", "貓"], "category")}
                </span>
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div style={{ marginLeft: "-15px" }}>
                    <p className="card-title">可服務時間</p>
                    {renderCheckboxes(
                      [
                        "星期一",
                        "星期二",
                        "星期三",
                        "星期四",
                        "星期五",
                        "星期六",
                        "星期日",
                      ],
                      "weekday"
                    )}
                    <br />
                    <br />
                    <p className="card-title">可服務地區</p>
                    <input
                      type="text"
                      name="city"
                      className="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                    <br />
                    <br />
                    <p className="card-title">所在地區</p>
                    <input
                      type="text"
                      name="location"
                      className="location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                    <br />
                    <br />
                    <p className="card-title">可接受體型</p>
                    <span className="card-text">
                      {renderCheckboxes(
                        ["1-5公斤", "5-10公斤", "10-15公斤", "15-20公斤"],
                        "weight"
                      )}
                    </span>
                    <br />
                    <br />
                    <p className="card-title">服務價格</p>
                    <input
                      type="text"
                      name="servicePrice"
                      className="servicePrice"
                      value={formData.servicePrice}
                      onChange={handleChange}
                    />
                    TWD
                    <div id="emailHelp" className="form-text">
                      平均價格為TWD300/天
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <br />
          <button className="saveBtn" type="submit" id="saveBtn">
            儲存設定
          </button>
          <div className="image-container" id="imageContainer" />
        </div>
      </main>
    </div>
  );
}

export default BecomeWalker;
