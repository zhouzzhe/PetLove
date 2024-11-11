import React, { useEffect, useState } from "react";
import "../../style/member.css";
import axios from "axios";

const ContactNanny = () => {
  const [requestData, setRequestData] = useState([]);
  const [message, setMessage] = useState(""); // 新增 state 用於存儲留言

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };


  useEffect(() => {
    const getData = async () => {
      const userId = localStorage.getItem("myUserIDDD");
      const result = await axios.get(`http://localhost:8000/member/contact-nanny/${userId}`);
      setRequestData(result.data);
    };
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("myUserIDDD"); // 獲取 userId
    const inputData = { walking_req: message };

    try {
      // 發送請求更新留言，將 userId 和 inputData 一起傳送
      await axios.post(`http://localhost:8000/member/contact-nanny/update/${userId}`, inputData);

      setRequestData(prevData =>
        prevData.map(item => ({
          ...item,
          walking_req: message // 更新 "其他要求" 為當前的留言
        }))
      );

      setMessage(""); // 提交成功後清空留言框
      console.log("留言已成功更新");
    } catch (error) {
      console.error("更新留言失敗", error);
    }
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // 根據需要調整格式
  };

  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: `#${color}`,
        backgroundColor: `#${color}`,
        height: 3,
        margin: 10,
      }}
    />
  );

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

      // window.onload = function () {
      //   const sidebar = document.querySelector(".nav");
      //   sidebar.classList.add("animate__animated", "animate__fadeInLeft");
      // };
    });
  }, []);

  return (
    <React.Fragment>
      {/* contact頁 */}
      <div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <img
                  src="/image/girl with dog.jpg"
                  alt=""
                  className="circle-image"
                />
                {requestData.map((Item) => (
                  <span id="nannyName">保母名稱:&nbsp;&nbsp;{Item.nanny_name}</span>
                ))}
              </div>
              <div className="card-body">
                <h6 className="card-text">訂單資訊</h6>
                {/* 訂單資訊 */}
                {requestData.map((Item) => (
                  <ul className="list-group">
                    <li className="list-group-item">
                      1.日期與時間 <span id="orderDate">{formatDate(Item.walking_date)}&nbsp;&nbsp;&nbsp;{Item.walking_time}</span>
                    </li>
                    <li className="list-group-item">
                      2.服務時間(30分鐘一節) <span id="orderTime">{Item.walking_day}</span>
                    </li>
                    <li className="list-group-item">
                      3.頻率 <span id="orderFrequency">一天{Item.service_sessions}次</span>
                    </li>
                    <li className="list-group-item">
                      4.所需天數 <span id="neededDay">{Item.required_days}天</span>
                    </li>
                    <li className="list-group-item">
                      5.地點 <span id="orderLocation">{Item.walking_location}</span>
                    </li>
                    <li className="list-group-item">
                      其他要求(選填) <span id="otherDemand">{Item.walking_req}</span>
                    </li>
                    <li className="list-group-item" id="orderNumber">
                      訂單編號#{Item.walking_order}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>

          {/* 這裡是留言板 */}
          <div className="col">
            <div className="container mt-5">
              <form id="messageForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="message">留言:</label>
                  <textarea className="form-control" id="message" required onChange={handleMessageChange} value={message} />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">
                  提交留言
                </button>
              </form>
              <br />
              <ColoredLine color="ff6144" />
              <ul id="messageList" className="list-group" />
            </div>
          </div>
        </div>
      </div>
      {/* 這是動畫 */}
      <div className="image-container" id="imageContainer"></div>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

export default ContactNanny;
