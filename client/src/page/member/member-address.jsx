import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../style/member.css";// 假設你的 CSS 路徑是這樣
import Sidebar from "./Sidebar";

const Address = () => {
  const [userId, setUserId] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [recipientName, setRecipientName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = localStorage.getItem("myUserIDDD"); // 獲取 userId
    const inputData = {
      recipient_address: recipientAddress,
      recipient_phone: recipientPhone,
      recipient_name: recipientName
    };
    try {
      const response = await axios.post(`http://localhost:8000/member/address/${userId}`, inputData);
      alert(response.data.message);
      window.location.href = '/member/logistic'; // 重定向
    } catch (error) {
      
    }
  };


  return (
    <React.Fragment>
      {/* 置入sidebar */}
      <div className="wrapper row">
        <Sidebar />
        <main className="col-md-10">
          <div>
            <form id="addAddressForm" onSubmit={handleSubmit}>
              <input type="hidden" name="user_id" value={userId} />
              <div className="mb-3">
                <label htmlFor="recipient_address" className="form-label">收件人地址</label>
                <input
                  type="text"
                  name="recipient_address"
                  className="form-control"
                  id="recipient_address"
                  required
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient_Phone" className="form-label">收件人手機</label>
                <input
                  type="tel"
                  name="recipient_Phone"
                  className="form-control"
                  id="recipient_Phone"
                  required
                  value={recipientPhone}
                  onChange={(e) => setRecipientPhone(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="recipient_name" className="form-label">收件人姓名</label>
                <input
                  type="text"
                  name="recipient_name"
                  className="form-control"
                  id="recipient_name"
                  required
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                />
              </div>
              <button type="submit" className="btn saveBtn" style={{ backgroundColor: '#ffcb48' }}>
                新增收件地址
              </button>
            </form>
            {/* 這是動畫 */}
            <div className="image-container" id="imageContainer"></div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Address;
