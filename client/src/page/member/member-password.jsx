import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "../../style/member.css";
import axios from "axios";

const PassWord = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // 防止表單默認提交

    // 清除舊的錯誤和成功訊息
    setError("");
    setSuccess("");

    const userId = localStorage.getItem("myUserIDDD");
    const inputData = { user_password: newPassword };

    // 檢查密碼是否匹配
    if (newPassword !== confirmPassword) {
      setError("兩個密碼不匹配");
      return;
    }

    // 密碼長度檢查
    if (newPassword.length < 8) {
      setError("密碼必須至少8個字元");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8000/member/password/update/${userId}`,
        inputData
      );

      if (response.data.success) {
        setSuccess("密碼更改成功！");

        // 清空密碼欄位和確認密碼欄位
        setNewPassword("");
        setConfirmPassword("");

        // 密碼更改成功後，使用 window.location.href 進行重定向
        window.location.href = "/member/userpage"; // 重定向到用戶頁面
      } else {
        window.location.href = "/member/userpage";
      }
    } catch (error) {
      window.location.href = "/member/userpage";
    }
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

    // 將 sidebar 動畫加到這裡
    const sidebar = document.querySelector(".nav");
    if (sidebar) {
      sidebar.classList.add("animate__animated", "animate__fadeInLeft");
    }
  }, []);

  return (
    <React.Fragment>
      <div className="wrapper row">
        <Sidebar />
        <main className="col-md-10">
          <div>
            <div className="card">
              <h5 className="card-header text-center" id="card-header" style={{ backgroundColor: "#ffcb48" }}>
                <span>更改密碼</span>
              </h5>
              <div className="card-body">
                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}
                <form onSubmit={handleSubmit}>
                  <p className="card-title">輸入新密碼</p>
                  <p className="card-text">
                    <input
                      className="input"
                      type="password"
                      placeholder="請輸入最少8個字元"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </p>
                  <br />
                  <p className="card-title">確認密碼</p>
                  <p className="card-text">
                    <input
                      type="password"
                      placeholder="請再次輸入密碼"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </p>
                  <br />
                  <button className="btn btn-primary saveBtn" type="submit">
                    更改確認
                  </button>
                </form>
              </div>
            </div>
            {/* 這是動畫 */}
            <div className="image-container" id="imageContainer"></div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default PassWord;
