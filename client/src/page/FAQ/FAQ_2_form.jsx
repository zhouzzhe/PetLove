import React, { Component } from "react";

class FAQFrom extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="position-relative mt-5">
          {/* 調整這個值 */}
          <div className="position-relative py-5">
            <button> 右按鈕 </button>
          </div>
          <div className="d-flex justify-content-center w-100 fs-2 position-relative py-5">
            聯絡客服信箱
          </div>

          <div className="w-50 m-auto px-3 py-5 border border-3 rounded-4">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label ps-2">
                申請日期
              </label>
              <select className="form-select" aria-label="Default select example">
                <option>yyyy-mm-dd</option>
                <option defaultValue="1">One</option>
                <option defaultValue="2">Two</option>
                <option defaultValue="3">Three</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label ps-2">
                姓名
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="怎麼稱呼您"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label ps-2">
                帳號
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="請輸入您的帳號"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label ps-2">
                電子信箱
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label ps-2">
                請序列你遇到的問題
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="8"
              ></textarea>
            </div>
          </div>

          <div className="d-flex justify-content-center m-5 fs-3 align-items-center">
            <button className="btn btn-danger ms-3 fs-3 rounded-pill p-3">
              送出表單
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FAQFrom;
