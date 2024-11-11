import React, { useState } from "react";
import axios from "axios";
import "../../style/login.css";
import { useHistory } from "react-router-dom"; // 使用 useHistory

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // 使用 useHistory

  const handleSubmit = async (event) => {
    event.preventDefault();

    const inputData = {
      user_mail: email,
      user_password: password,
    };

    try {
      const response = await axios.post(`http://localhost:8000/member/login`, inputData);

      if (response.data.success) {
        console.log("登入成功！", response.data);
        console.log("登入成功！(老師寫的)", response.data.apple);
        // localStorage.setItem 儲存 user_id
        localStorage.setItem("myUserIDDD", response.data.apple);

        // 如果你需要使用 session ID 或者用戶 ID，可以在這裡執行相應操作
        history.push("/member/loginSuccess"); // 導航到成功頁面
      } else {
        console.log("登入失敗！", response.data.message);
        alert(response.data.message);
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <React.Fragment>
      <form id="form" onSubmit={handleSubmit}>
        <div className="box mx-auto">
          <div className="headLine d-flex align-items-center row">
            <a className="col-1" href="./pay.html">
              <img src="./img/goback.png" alt="返回" />
            </a>
            <p className="col-11 d-flex justify-content-center align-items-center">
              登錄 / 註冊
            </p>
          </div>

          <div className="inputBox p-5 d-flex text-center justify-content-center align-items-center">
            <p>登入帳號密碼</p>
            <input
              className="ps-3 my-3"
              type="text"
              placeholder="請輸入Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="ps-3 mb-5"
              type="password"
              placeholder="請輸入密碼"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button id="submit" type="submit">
              登入
            </button>
            <div className="d-flex align-items-center mt-3">
              <p className="fs-5 my-auto">還沒有帳號嗎？</p>
              <a href="/member/Register" className="btn" >註冊</a>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Login;
