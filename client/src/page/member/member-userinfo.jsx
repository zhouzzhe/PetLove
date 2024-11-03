import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";

function UserInfo() {
  const [userInfo, setUserInfo] = useState({
    userName: "Jason",
    userPhone: "0912345678",
    userEmail: "123@gmail.com",
  });
  const [isEditing, setIsEditing] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved user info:", userInfo);
    setIsEditing(false);
  };

  const handleChange = () => {
    setIsEditing(true);
  };

  return (
    <div className="wrapper row">
      <Sidebar />
      <main className="col-md-10">
        <div>
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
