import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";
import axios from "axios";

function UserInfo() {
  const [userData, setUserData] = useState([]);
  const [userInfo, setUserInfo] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const userId = localStorage.getItem("myUserIDDD");
      const result = await axios.get(`http://localhost:8000/member/userinfo/${userId}`);
      setUserData(result.data);
      // 這裡將獲取的數據設置到 `userInfo` 進行編輯
      if (result.data.length > 0) {
        const { user_name, user_phone, user_mail } = result.data[0];
        setUserInfo({
          userName: user_name,
          userPhone: user_phone,
          userEmail: user_mail,
        });
      }
    };
    getData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const userId = localStorage.getItem("myUserIDDD");
    const inputData = {
      user_name: userInfo.userName,
      user_phone: userInfo.userPhone,
      user_mail: userInfo.userEmail,
    };

    try {
      await axios.post(`http://localhost:8000/member/userinfo/update/${userId}`, inputData);
      setIsEditing(false); // 保存後退出編輯狀態
      console.log("已成功更新");
    } catch (error) {
      console.error("更新失敗", error);
    }
  };

  const handleChange = () => {
    setIsEditing(true);
  };

  return (
    <div className="wrapper row">
      <Sidebar />
      <main className="col-md-10">
        <div>
          {userData.length > 0 && (
            <div className="card">
              <h5 className="card-header">基本資料</h5>
              <div className="card-body">
                <p className="card-title">名稱</p>
                {isEditing ? (
                  <input
                    type="text"
                    className="form-control"
                    name="userName"
                    value={userInfo.userName}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="card-text">{userInfo.userName}</p>
                )}
                <br />
                <p className="card-title">手機</p>
                {isEditing ? (
                  <input
                    type="tel"
                    className="form-control userPhone"
                    name="userPhone"
                    value={userInfo.userPhone}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p className="card-text">{userInfo.userPhone}</p>
                )}
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div style={{ marginLeft: "-15px" }}>
                    <p className="card-title">電子郵件</p>
                    {isEditing ? (
                      <input
                        type="email"
                        className="form-control"
                        name="userEmail"
                        value={userInfo.userEmail}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="card-text">{userInfo.userEmail}</p>
                    )}
                  </div>
                  <img
                    src="/svg/shine.svg"
                    alt="shine"
                    style={{ width: "80px" }}
                  />
                </div>
              </div>
            </div>
          )}
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
        </div>
        <div className="image-container" id="imageContainer"></div>
      </main>
    </div>
  );
}

export default UserInfo;
