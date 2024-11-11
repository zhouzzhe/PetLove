import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";
import axios from "axios";

function BecomeNanny() {
  const [setData, setsetData] = useState([]);  // 用來保存所有的設定資料
  const [editData, setEditData] = useState({
    NannyIntroduce: "",
    NannyDagCat: [], // 可接受寵物（多選）
    NannyWeek: [], // 可服務時間（多選）
    NannyArea: "", // 可服務地區
    NannyPetSize: [], // 可接受體型（多選）
    NannyPrice: "", // 服務價格
  });

  const [isEditing, setIsEditing] = useState(true);  // 初始時設為編輯模式，讓使用者可以立即填寫

  // 載入資料
  useEffect(() => {
    const getData = async () => {
      const userId = localStorage.getItem("myUserIDDD");  // 獲取使用者ID
      const result = await axios.get(`http://localhost:8000/member/become-nanny/${userId}`);  // 獲取資料
      setsetData(result.data);  // 更新資料

      if (result.data.length > 0) {
        const {
          Nanny_introduce,
          becomeNanny_dogCat,
          becomeNanny_week,
          service_city,
          becomeNanny_petSize,
          becomeNanny_price
        } = result.data[0];

        setEditData({
          NannyIntroduce: Nanny_introduce || "",  // 預設為空字串
          NannyDagCat: (becomeNanny_dogCat || "").split(','),  // 預設為空字串並split
          NannyWeek: (becomeNanny_week || "").split(','),  // 預設為空字串並split
          NannyArea: service_city || "",  // 預設為空字串
          NannyPetSize: (becomeNanny_petSize || "").split(','), // 預設為空字串並split
          NannyPrice: becomeNanny_price || "",  // 預設為空字串
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
      Nanny_introduce: editData.NannyIntroduce,
      becomeNanny_dogCat: editData.NannyDagCat.join(','),  // 轉換為逗號分隔的字串
      becomeNanny_week: editData.NannyWeek.join(','),  // 轉換為逗號分隔的字串
      service_city: editData.NannyArea,
      becomeNanny_petSize: editData.NannyPetSize.join(','),  // 轉換為逗號分隔的字串
      becomeNanny_price: editData.NannyPrice,
    };

    try {
      await axios.post(`http://localhost:8000/member/become-nanny/update/${userId}`, inputData);
      setIsEditing(false); // 保存後退出編輯模式
      console.log("資料已成功更新");
    } catch (error) {
      console.error("儲存失敗，錯誤訊息:", error);
    }
  };

  const handleChange = () => {
    setIsEditing(true);  // 開啟編輯模式
  };

  // 渲染複選框
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
              checked={editData[name]?.includes(option)}  // 如果該選項在editData裡存在，就勾選
              onChange={(e) => handleCheckboxChange(e, name)}
              style={{ marginRight: '5px' }}  // 控制複選框和文字間距
              disabled={!isEditing}  // 只有在編輯模式下才能點選
            />
            <label className="form-check-label">{option}</label>
          </div>
        ))}
      </div>
    );
  };

  // 複選框改變處理
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
              成為夥伴(保姆ver.)
            </h5>
            <div className="card-body">
              <form onSubmit={(e) => e.preventDefault()}>
                <p className="card-title">自我介紹</p>
                {isEditing ? (
                  <textarea
                    className="form-control selfIntro"
                    style={{ width: "100%" }}
                    name="NannyIntroduce"
                    value={editData.NannyIntroduce}
                    onChange={handleInputChange}
                    placeholder="可以詳細描述所提供的服務...等"
                  />
                ) : (
                  <p>{editData.NannyIntroduce}</p>
                )}

                <p className="card-title">可接受寵物</p>
                {renderCheckboxes(["狗", "貓"], "NannyDagCat")}

                <p className="card-title">可服務時間</p>
                {renderCheckboxes(
                  ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
                  "NannyWeek"
                )}

                <p className="card-title">可服務地區</p>
                {isEditing ? (
                  <input
                    type="text"
                    name="NannyArea"
                    className="form-control"
                    value={editData.NannyArea}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{editData.NannyArea}</p>
                )}

                <p className="card-title">可接受體型</p>
                {renderCheckboxes(
                  ["1-5公斤", "5-10公斤", "10-15公斤", "15-20公斤"],
                  "NannyPetSize"
                )}

                <p className="card-title">服務價格</p>
                {isEditing ? (
                  <input
                    type="text"
                    name="NannyPrice"
                    className="form-control"
                    value={editData.NannyPrice}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{editData.NannyPrice}</p>
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
            <button className="btn btn-secondary changeBtn" onClick={handleChange}>
              修改
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default BecomeNanny;
