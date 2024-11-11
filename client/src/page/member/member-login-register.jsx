import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../../style/member.css";

// import "../../style/login.register.css";

function Register() {
  const [memberName, setmemberName] = useState("");
  const memberNameChange = (event) => {
    // console.log("小巴");
    setmemberName(event.target.value);
  };

  const [email, setEmail] = useState("");
  const emailChange = (event) => {
    // console.log("吉伊");
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState("");
  const passwordChange = (event) => {
    // console.log("卡哇");
    setPassword(event.target.value);
    // console.log(event.target.value);
    // console.log(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // 防止表單提交導致頁面刷新

    const inputData = {
      name: memberName,
      email: email,
      password: password,
    };
    console.log(inputData);

    try {
      const response = await axios.post(
        `http://localhost:8000/member/Register`,
        inputData
      );
      console.log(response.data);
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <React.Fragment>
      <form id="form" onSubmit={handleSubmit}>
        <div className="box mx-auto">
          <div className="headLine d-flex align-items-center row">
            <a className="col-1" href="/login">
              <img src="./img/goback.png" />
            </a>
            <p className="col-11 d-flex justify-content-center align-items-center">
              登錄 / 註冊
            </p>
          </div>

          <div className="inputBox p-5 d-flex text-center justify-content-center align-items-center">
            <p>註冊帳號密碼</p>
            <input
              className="ps-3 my-3"
              type="text"
              maxlength="10"
              placeholder="請輸入您的會員名稱"
              name="memberName"
              onChange={memberNameChange}
              value={memberName}
            />
            <input
              className="ps-3 my-3"
              type="text"
              placeholder="請輸入Email"
              name="email"
              onChange={emailChange}
              value={email}
            />
            <input
              className="ps-3 my-3"
              type="password"
              placeholder="請輸入密碼"
              name="password"
              onChange={passwordChange}
              value={password}
            />
            <button id="submit" type="submit">
              註冊
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Register;
