import React from "react";
import "../../style/loginSuccess.css";
import "animate.css";
import axios from "axios";

function LoginSuccess() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center  flex-column ">
        <p className="successText">訂單送出成功！</p>
        <img
          className="successImg"
          src="https://media.istockphoto.com/id/1325997570/photo/bengal-cat-lying-on-sofa-and-smiling.webp?a=1&b=1&s=612x612&w=0&k=20&c=taQuQSqSHLLYI5svzRUrLqO73SdKilVthO_8gABtTD4="
        />
        <p className="successText">將在5秒內導回首頁...</p>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

      <script>
        setTimeout(function (){" "}
        {
          // 跳轉頁面
          (window.location = "/home")
        }
        , 2000); // 2秒
      </script>
    </React.Fragment>
  );
}

export default LoginSuccess;