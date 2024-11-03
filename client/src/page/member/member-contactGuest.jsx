import React, { useEffect, useState } from "react";
import "../../style/member.css";

// 留言板
function ContactGuest() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted");
    if (message) {
      setMessages((prevMessages) => [...prevMessages, message]); // 消息列表
      console.log("Submitted message:", message);
      setMessage("");
    } else {
      console.log("No submit");
    }
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
    console.log("Updated messages:", messages); // 每次 messages 更新時打印
  }, [messages]);

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

      document.getElementById("imageContainer").appendChild(imgElement);
    });
  }, []);

  return (
    <React.Fragment>
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
                <span id="nannyName">客戶名字</span>
              </div>
              <div className="card-body">
                <h6 className="card-text">訂單資訊</h6>
                <ColoredLine color="ff6144" />
                <ul className="list-group">
                  <li className="list-group-item">
                    1.日期與時間 <span id="orderDate">2024</span>
                  </li>
                  <li className="list-group-item">
                    2.服務時間(30分鐘一節) <span id="orderTime">30min</span>
                  </li>
                  <li className="list-group-item">
                    3.頻率 <span id="orderFrequency">一天一次</span>
                  </li>
                  <li className="list-group-item">
                    4.所需天數 <span id="neededDay">2天</span>
                  </li>
                  <li className="list-group-item">
                    5.地點 <span id="orderLocation">台中市南屯區</span>
                  </li>
                  <li className="list-group-item">
                    其他要求(選填) <span id="otherDemand">散步喝水</span>
                  </li>
                  <li className="list-group-item" id="orderNumber">
                    訂單編號#789
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 這裡是留言板 */}
          <div className="col">
            <div className="container mt-5">
              <form id="messageForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="message">留言:</label>
                  <textarea
                    className="form-control message"
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">
                  提交留言
                </button>
              </form>
              <br />
              <ColoredLine color="ff6144" />
              <ul id="messageList" className="list-group">
                {messages.map((msg, index) => (
                  <li key={index} className="list-group-item">
                    {msg}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container" id="imageContainer"></div>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default ContactGuest;
