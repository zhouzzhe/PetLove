import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../../style/nanny_3_info.css";
import { DatePicker } from "@douyinfe/semi-ui";

function NannyInfo(prop) {
  const [data, setData] = useState([
    {
      user_id: 1,
      user_name: "井口理",
      user_distance: "200",
      user_price: "5880",
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/nanny/id=${prop.match.params.id}`
      );
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 設定表單內容狀態

  const [petType, setPetType] = useState("狗");
  const buttonHandle = (event) => {
    setPetType(event.target.value);
  };
  // console.log(petType);

  const [startTime, setStartTime] = useState();
  // const startTimeChange = (event) => {
  // console.log(startTime);
  //   // setStartTime();
  // };
  const formattedStartTime = new Date(startTime).toLocaleDateString();
  // console.log(formattedStartTime);

  const [endTime, setEndTime] = useState();
  // const endTimeChange = (event) => {
  //   console.log(event);
  //   // setEndTime(event.target.value);
  // };
  const formattedEndTime = new Date(endTime).toLocaleDateString();

  const [phone, setPhone] = useState("");
  const phoneChange = (event) => {
    // console.log(event.target.value);
    setPhone(event.target.value);
  };

  const [address, setAddress] = useState("");
  const addressChange = (event) => {
    // console.log(event.target.value);
    setAddress(event.target.value);
  };

  const [remark, setRemark] = useState("");
  const remarkChange = (event) => {
    // console.log(event.target.value);
    setRemark(event.target.value);
  };

  const inputRef = useRef({});
  const handleSubmit = async (event) => {
    event.preventDefault(); // 防止表單提交導致頁面刷新
    // console.log("address:", inputRef.current.address.value);
    // console.log("phone:", inputRef.current.phone.value);
    // console.log("remark:", inputRef.current.remark.value);

    const inputData = {
      nanny_id: prop.match.params.id,
      pet_type: petType,
      startTime: formattedStartTime,
      endTime: formattedEndTime,
      client_phone: inputRef.current.phone.value,
      client_address: inputRef.current.address.value,
      client_remark: inputRef.current.remark.value,
    };

    console.log(inputData);

    try {
      const response = await axios.post(
        `http://localhost:8000/nanny/id=${prop.match.params.id}/form`,
        inputData
      );
      // console.log(response);
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  return (
    <React.Fragment>
      {/* 想要預約的保母 */}
      <a className="backPage">
        <img src="/image/arrow.png" className="mx-5" alt="" />
      </a>
      <div className="container">
        <div className="nanny d-flex">
          <div className="nannyPic col-2">
            <img src="/image/南瓜.jpg" className="img-fluid" alt="保母照片" />
          </div>
          <div className="nameStar mx-5">
            <div className="nannyName">
              <p>{data.user_name}</p>
            </div>
            <div className="startAndComment">
              <div className="d-flex">
                <div>
                  <img src="./img/Star.png" alt="" />
                  <img src="./img/Star.png" alt="" />
                  <img src="./img/Star.png" alt="" />
                  <img src="./img/Star.png" alt="" />
                  <img src="./img/Star.png" alt="" />
                </div>
                <p style={{ padding: "2px 0 0 15px" }}>155則評論</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 表單開始 */}
      <div className="container d-flex flex-column align-items-center">
        <form className="w-75 reserveForm" id="form" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-around mb-3">
            <input
              type="radio"
              className="btn-check"
              name="petType"
              id="dogButton"
              autoComplete="off"
              value={"狗"}
              onClick={buttonHandle}
              defaultChecked
            ></input>
            <label
              className="btn custom-button btn-outline-warning"
              htmlFor="dogButton"
            >
              小狗狗
            </label>
            <input
              type="radio"
              className="btn-check"
              name="petType"
              id="catButton"
              autoComplete="off"
              value={"貓"}
              onClick={buttonHandle}
            ></input>
            <label
              className="btn custom-button btn-outline-warning"
              htmlFor="catButton"
            >
              小貓貓
            </label>{" "}
            {/* <div
              type="radio"
              className="custom-button btn rounded-pill p-2 w-25"
              name="petType"
            >
              小貓貓
            </div>
            <div
              type="radio"
              className="custom-button btn rounded-pill p-2 w-25"
              name="petType"
            >
              小狗狗
            </div> */}
          </div>
          <div className="mb-3 text-center">
            <p>預約日期</p>
            <div className="mb-5 text-center d-flex gap-5 justify-content-center align-items-center">
              {/* <select className="text-center custom-color w-50 my-2">
                <option>2024/11/01</option>
              </select> */}
              <DatePicker
                className=" border border-3 border-warning rounded-3"
                placeholder="請選擇日期"
                insetLabel="開始日期"
                style={{ width: 360 }}
                value={startTime}
                onChange={setStartTime}
              />
              <p className="px-3 pt-3">至</p>
              {/* <select className="text-center custom-color w-50 my-2">
                <option>2024/11/01</option>
              </select> */}
              <DatePicker
                className="border border-3 border-warning rounded-3"
                placeholder="請選擇日期"
                insetLabel="结束日期"
                style={{ width: 360 }}
                value={endTime}
                onChange={setEndTime}
              />
            </div>
          </div>
          <div className="mb-5 text-center">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              電話
            </label>
            <input
              type="text"
              className="form-control custom-color"
              id="exampleFormControlInput1"
              placeholder="請輸入電話"
              name="phone"
              value={phone}
              onChange={phoneChange}
              ref={(el) => (inputRef.current.phone = el)}
            ></input>
          </div>
          <div className="mb-5 text-center">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              地址
            </label>
            <input
              type="text"
              className="form-control custom-color"
              id="exampleFormControlInput1"
              placeholder="請輸入地址"
              name="address"
              value={address}
              onChange={addressChange}
              ref={(el) => (inputRef.current.address = el)}
            ></input>
          </div>
          <div className="mb-3 text-center">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              備註
            </label>
            <textarea
              className="form-control custom-color text-center"
              id="exampleFormControlTextarea1Ｆ"
              rows="4"
              name="remark"
              value={remark}
              onChange={remarkChange}
              ref={(el) => (inputRef.current.remark = el)}
            ></textarea>
          </div>

          <div className="Subtotal mt-5 p-5 align-items-center">
            <div className="mb-5 text-center fs-2 fw-bold">訂單資訊 : </div>
            <div className="d-flex justify-content-between px-5 fs-3">
              <p>寵物：</p>
              <p>小狗狗</p>
            </div>
            <div className="d-flex justify-content-between px-5 fs-3">
              <p>電話：</p>
              <p>{phone}</p>
            </div>
            <div className="d-flex justify-content-between px-5 fs-3">
              <p>天數：</p>
              <p style={{ letterSpacing: "10px" }}>
                {(Number(endTime) - Number(startTime)) / (1000 * 60 * 60 * 24)}
                天
              </p>
            </div>
            <div className="d-flex justify-content-between px-5 fs-3">
              <p>地址：</p>
              <p>{address}</p>
            </div>
            <div className="d-flex justify-content-between px-5 fs-3">
              <p>備註：</p>
              <p>{remark}</p>
            </div>
          </div>
          <div className="total d-flex justify-content-between p-5 fs-3">
            <p>總金額 : </p>
            <p>TWD 7200</p>
          </div>
          <div className="submitRequest d-flex justify-content-center">
            <button id="submit" type="submit">
              送出請求
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
export default NannyInfo;
