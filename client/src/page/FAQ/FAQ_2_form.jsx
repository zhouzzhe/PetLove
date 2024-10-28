import React, { useState, useRef } from "react";
import axios from "axios";
import { DatePicker } from "@douyinfe/semi-ui";

function FAQFrom(prop) {
  const [data, setData] = useState([]);

  const [applicationTime, setApplicationTime] = useState();
  const formattedApplicationTime = new Date(
    applicationTime
  ).toLocaleDateString();

  const [userName, setUserName] = useState("");
  const nameChange = (event) => {
    setUserName(event.target.value);
  };

  const [userPhone, setUserPhone] = useState("");
  const phoneChange = (event) => {
    setUserPhone(event.target.value);
  };

  const [userEmail, setUserEmail] = useState("");
  const emailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const [remark, setRemark] = useState();
  const remarkChange = (event) => {
    setRemark(event.target.value);
  };

  const inputRef = useRef({});
  const handleSubmit = async (event) => {
    event.preventDefault(); // 防止表單提交導致頁面刷新
    // console.log("address:", inputRef.current.address.value);
    // console.log("phone:", inputRef.current.phone.value);
    // console.log("remark:", inputRef.current.remark.value);

    const inputData = {
      user_name: inputRef.current.name.value,
      user_applicationTime: formattedApplicationTime,
      user_phone: inputRef.current.phone.value,
      user_email: inputRef.current.email.value,
      user_remark: inputRef.current.remark.value,
    };
    console.log(inputData);

    try {
      const response = await axios.post(
        ``
      )
    }
  };

  return (
    <React.Fragment>
      <div className="position-relative py-5">
        <button> 右按鈕 </button>
      </div>
      <div className="d-flex justify-content-center w-100 fs-2 position-relative py-5">
        聯絡客服信箱
      </div>
      {/* 表單填寫開始 */}
      <form className="mb-3" id="submit" onSubmit={handleSubmit}>
        <div className="w-50 m-auto px-3 py-5 border border-3 rounded-4">
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label ps-2"
            >
              申請日期
            </label>
            <div>
              <DatePicker
                className=" w-100 border border-1 rounded-3"
                placeholder="請選擇日期"
                insetLabel="申請日期"
                style={{ width: 360 }}
                onChange={setApplicationTime}
              />
            </div>
          </div>

          {/* <select
                className="form-select"
                aria-label="Default select example"
              >
                <option>yyyy-mm-dd</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select> */}

          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label ps-2"
            >
              姓名
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="怎麼稱呼您"
              value={userName}
              onChange={nameChange}
              ref={(el) => (inputRef.current.name = el)}
            ></input>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput2"
              className="form-label ps-2"
            >
              電話
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput2"
              placeholder="請輸入您的電話"
              value={userPhone}
              onChange={phoneChange}
              ref={(el) => (inputRef.current.phone = el)}
            ></input>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput3"
              className="form-label ps-2"
            >
              電子信箱
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput3"
              placeholder="name@example.com"
              value={userEmail}
              onChange={emailChange}
              ref={(el) => (inputRef.current.email = el)}
            ></input>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label ps-2"
            >
              請序列你遇到的問題
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              value={remark}
              onChange={remarkChange}
              ref={(el) => (inputRef.current.remark = el)}
            ></textarea>
          </div>
        </div>

        <div className="d-flex justify-content-center m-5 fs-3 align-items-center">
          <button
            className="btn btn-danger ms-3 fs-3 rounded-pill p-3"
            id="submit"
            type="submit"
          >
            送出表單
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default FAQFrom;
