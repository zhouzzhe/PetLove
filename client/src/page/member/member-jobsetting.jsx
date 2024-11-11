import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";
import axios from "axios";

function Jobsetting() {
  const [setData, setsetData] = useState([]);
  const [editData, setEditData] = useState({
    jobIntroduce: "",
    jobDagCat: [],
    jobWeek: [],
    jobArea: "",
    jobPetSize: [],
    jobPrice: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // 載入資料
  useEffect(() => {
    const getData = async () => {
      const userId = localStorage.getItem("myUserIDDD");
      const result = await axios.get(`http://localhost:8000/member/jobsetting/${userId}`);
      setsetData(result.data);
      
      if (result.data.length > 0) {
        const { 
          jobsetting_introduce, 
          jobsetting_dogCat, 
          jobsetting_week, 
          jobsetting_area, 
          jobsetting_petSize, 
          jobsetting_price 
        } = result.data[0];

        setEditData({
          jobIntroduce: jobsetting_introduce,
          jobDagCat: jobsetting_dogCat.split(','),  // 假設狗貓資料是用逗號分隔的
          jobWeek: jobsetting_week.split(','),  // 假設星期資料是用逗號分隔的
          jobArea: jobsetting_area,
          jobPetSize: jobsetting_petSize.split(','), // 假設體型資料是用逗號分隔的
          jobPrice: jobsetting_price,
        });
      }
    };
    getData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const userId = localStorage.getItem("myUserIDDD");
    const inputData = {
      jobsetting_introduce: editData.jobIntroduce,
      jobsetting_dogCat: editData.jobDagCat.join(','),  // 將選中的寵物類型轉回為逗號分隔的字串
      jobsetting_week: editData.jobWeek.join(','),  // 將選中的星期轉回為逗號分隔的字串
      jobsetting_area: editData.jobArea,
      jobsetting_petSize: editData.jobPetSize.join(','),  // 將選中的體型轉回為逗號分隔的字串
      jobsetting_price: editData.jobPrice,
    };

    try {
      await axios.post(`http://localhost:8000/member/jobsetting/update/${userId}`, inputData);
      setIsEditing(false); // 保存後退出編輯狀態
      console.log("已成功更新");
    } catch (error) {
      console.error("更新失敗", error);
    }
  };

  const handleChange = () => {
    setIsEditing(true);
  };

  const renderCheckboxes = (options, name) => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {options.map((option, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
            <input
              className="form-check-input"
              type="checkbox"
              name={name}
              value={option}
              checked={editData[name]?.includes(option)}
              onChange={(e) => handleCheckboxChange(e, name)}
              style={{ marginRight: '5px' }}  // 控制複選框和文字間距
              disabled={!isEditing}  // 只有在編輯模式下才啟用
            />
            <label className="form-check-label">{option}</label>
          </div>
        ))}
      </div>
    );
  };

  // 複選框改變處理函數
  const handleCheckboxChange = (e, name) => {
    const { value, checked } = e.target;
    setEditData((prev) => {
      const updatedList = checked
        ? [...prev[name], value]  // 加入選中的項目
        : prev[name].filter((item) => item !== value); // 移除未選中的項目

      return { ...prev, [name]: updatedList };
    });
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
                    name="jobIntroduce"
                    value={editData.jobIntroduce}
                    onChange={handleInputChange}
                    placeholder="可以詳細描述所提供的服務...等"
                  />
                ) : (
                  <p>{editData.jobIntroduce}</p>
                )}
                <p className="card-title">可接受寵物</p>
                {renderCheckboxes(["狗", "貓"], "jobDagCat")}
                <p className="card-title">可服務時間</p>
                {renderCheckboxes(
                  ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
                  "jobWeek"
                )}
                <p className="card-title">可服務地區</p>
                {isEditing ? (
                  <input
                    type="text"
                    name="jobArea"
                    className="form-control"
                    value={editData.jobArea}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{editData.jobArea}</p>
                )}
                <p className="card-title">可接受體型</p>
                {renderCheckboxes(
                  ["1-5公斤", "5-10公斤", "10-15公斤", "15-20公斤"],
                  "jobPetSize"
                )}
                <p className="card-title">服務價格</p>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control servicePrice"
                    name="jobPrice"
                    value={editData.jobPrice}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{editData.jobPrice}</p>
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
              onClick={handleChange}
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
