import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

function Jobsetting() {
  const [formData, setFormData] = useState({
    selfIntro: "自我介紹內容...",
    category: [],
    weekday: [],
    city: "台中",
    location: "南屯區",
    weight: [],
    servicePrice: "300",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      if (type === "checkbox") {
        const values = prev[name] || [];
        return {
          ...prev,
          [name]: checked
            ? [...values, value]
            : values.filter((v) => v !== value),
        };
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };

  const renderCheckboxes = (options, name) => {
    return options.map((option, index) => (
      <span key={index}>
        <input
          className="form-check-input"
          type="checkbox"
          name={name}
          value={option}
          id={`${name}-${index}`}
          checked={formData[name].includes(option)}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor={`${name}-${index}`}>
          {option}
        </label>
      </span>
    ));
  };

  const handleSave = () => {
    console.log("Saved settings:", formData);
    setIsEditing(false);
  };

  return (
    <div className="wrapper row">
      <Sidebar />
      <main className="col-md-10" style={{ position: "relative" }}>
        <div>
          <div className="card">
            <h5 className="card-header" style={{ backgroundColor: "#ffcb48" }}>
              工作設定
            </h5>
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <p className="card-title">自我介紹</p>
                {isEditing ? (
                  <textarea
                    className="form-control selfIntro"
                    style={{ width: "100%" }}
                    value={formData.selfIntro}
                    onChange={handleChange}
                    placeholder="可以詳細描述所提供的服務...等"
                  />
                ) : (
                  <p>{formData.selfIntro}</p>
                )}
                <p className="card-title">可接受寵物</p>
                {renderCheckboxes(["狗", "貓"], "category")}
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
                <p className="card-title">可服務地區</p>
                {isEditing ? (
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    value={formData.city}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{formData.city}</p>
                )}
                <p className="card-title">所在地區</p>
                {isEditing ? (
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    value={formData.location}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{formData.location}</p>
                )}
                <p className="card-title">可接受體型</p>
                {renderCheckboxes(
                  ["1-5公斤", "5-10公斤", "10-15公斤", "15-20公斤"],
                  "weight"
                )}
                <p className="card-title">服務價格</p>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control servicePrice"
                    value={formData.servicePrice}
                    onChange={handleChange}
                  />
                ) : (
                  <p>{formData.servicePrice}</p>
                )}
                <div className="form-text">平均價格為TWD300/天</div>
              </form>
            </div>
          </div>
          <br />
          {isEditing ? (
            <button className="btn btn-primary saveBtn" onClick={handleSave}>
              儲存設定
            </button>
          ) : (
            <button
              className="btn btn-secondary changeBtn"
              onClick={() => setIsEditing(true)}
            >
              修改
            </button>
          )}
          <div className="image-container" id="imageContainer" />
        </div>
      </main>
    </div>
  );
}

export default Jobsetting;
