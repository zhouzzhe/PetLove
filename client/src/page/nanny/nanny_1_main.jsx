import React from "react";
import axios from "axios";
import "../../style/nanny_1_main.css";

function NannyMain() {
  return (
    <React.Fragment>
      {/* 尋找寵物保母表單 */}
      <h2 className="fw-bold fs-2 text-center my-5">尋找寵物保母</h2>
      <div className="searchNannyFormDiv">
        <form action className="searchNannyForm col-10">
          <div className="NannyFormOption">
            <select className="selectCity">
              <option>台中市</option>
            </select>
            <select className="selectCity">
              <option>西屯區</option>
            </select>
          </div>
          <div className="NannyFormOption">
            <button type="button" className="custom-button">
              小貓貓
            </button>
            <button type="button" className="custom-button">
              小狗狗
            </button>
          </div>
          <p className="gender">保母性別</p>
          <div className="NannyFormOption">
            <button type="button" className="custom-button">
              男
            </button>
            <button type="button" className="custom-button">
              女
            </button>
            <button type="button" className="custom-button">
              不限
            </button>
          </div>
          <p className="reservation">預約日期</p>
          <div className="NannyFormOption">
            <select className="chooseDate">
              <option value>2024/11/01</option>
            </select>
            <p>至</p>
            <select className="chooseDate">
              <option value>2024/11/01</option>
            </select>
          </div>
        </form>
        <div className="searchNannyButton">
          <button className>尋找優質保母</button>
        </div>
      </div>
      {/* 優質保母任你選 */}
      <div className="chooseNannyContainer">
        <h2 className="fw-bold fs-2 text-center my-5">優質寵物保母任你選</h2>
        <div>
          <div className="nannySort">
            <p>排序 : </p>
            <select>
              <option>依距離</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center mx-5">
          <div className="col-xxxl-3 mb-4">
            <div className="nannyCard d-flex align-items-center">
              <div className="col-4 cardImg me-3">
                <img
                  src="/image/南瓜.jpg"
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: "20px", width: "60%" }}
                />
              </div>
              <div
                className="col-8 d-flex justify-content-between align-items-center"
                style={{ paddingRight: "50px" }}
              >
                <div className="nameStarRecommend">
                  <div>小姐姐</div>
                  <div className="mb-1">
                    <img src="./img/Star.png" alt="" />
                    <img src="./img/Star.png" alt="" />
                    <img src="./img/Star.png" alt="" />
                    <img src="./img/Star.png" alt="" />
                    <img src="./img/Star.png" alt="" />
                  </div>
                  <div>155則評論</div>
                </div>
                <div>距離10公里</div>
                <div>300NTD</div>
              </div>
            </div>
          </div>
          <div className="col-xxxl-3 mb-4">
            <div className="nannyCard d-flex align-items-center">
              <div className="col-4 cardImg me-3">
                <img
                  src="/image/南瓜.jpg"
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: "20px", width: "60%" }}
                />
              </div>
              <div
                className="col-8 d-flex justify-content-between align-items-center"
                style={{ paddingRight: "50px" }}
              >
                <div className="nameStarRecommend">
                  <div>小姐姐</div>
                  <div className="mb-1">
                    <img src="./img/Star.png" alt="" />
                    <img src="./img/Star.png" alt="" />
                    <img src="./img/Star.png" alt="" />
                    <img src="./img/Star.png" alt="" />
                    <img src="./img/Star.png" alt="" />
                  </div>
                  <div>155則評論</div>
                </div>
                <div>距離10公里</div>
                <div>300NTD</div>
              </div>
            </div>
          </div>
          {/* 可重複的 nannyCard 區域 */}
        </div>
        <div className="choosepage">
          <a href>
            <img src="./img/triangle1.png" alt="三角形" />
          </a>
          <div>
            <a href>1</a>
            <a href>2</a>
            <a href>3</a>
            <a href>4</a>
          </div>
          <a href>
            <img src="./img/triangle2.png" alt="三角形" />
          </a>
        </div>
      </div>
      {/* 什麼毛孩適合找保母 */}
      <div className="text-center mt-5">
        <h2 className="fw-bold fs-2 text-center " style={{ margin: "70px" }}>
          什麼樣的毛孩適合找保母?
        </h2>
        <div className="row align-items-center mb-4 mt-5">
          <div className="col-6 d-flex justify-content-center">
            <img
              src="./img/什麼樣適合1.png"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>
          <div
            className="col-6 d-flex flex-column"
            style={{
              paddingLeft: "25px",
              paddingRight: "25px",
              textAlign: "left",
            }}
          >
            <p className="fw-bold fs-5">不適合外宿的毛孩</p>
            <p>針對外宿會緊張的貓咪或是出門不便的多貓家庭</p>
            <p>飼主出遠門，專業貓保姆到府上照顧貓咪、鏟屎、餵食、陪玩、回報</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div
            className="col-6 d-flex flex-column"
            style={{ paddingLeft: "80px", textAlign: "left" }}
          >
            <p className="fw-bold fs-5">需要陪伴的毛孩</p>
            <p>
              或是擔心狗狗粘人、會吠叫、敏感、需陪伴出遠門有另一個跟你一樣愛他的家庭陪伴照顧他
            </p>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <img
              src="./img/什麼樣適合2.png"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "80%" }}
            />
          </div>
        </div>
      </div>
      {/* 為什麼信任寵樂? */}
      <div className="text-center mt-5">
        <h2
          className="fw-bold fs-2 text-center"
          style={{ margin: "150px 0 50px 0" }}
        >
          為什麼信任寵樂保母?
        </h2>
        {/* 第一組圖片和內容 */}
        <div className="row align-items-center mb-4 mt-5">
          <div className="col-7 d-flex justify-content-center">
            <img
              src="./img/為什性任寵樂1.png"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-5" style={{ textAlign: "right" }}>
            <div className="mb-3 d-flex align-items-center">
              <img
                src="./img/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">實名認證</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img
                src="./img/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">良民證</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img
                src="./img/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">公開真實評價</p>
            </div>
          </div>
        </div>
        {/* 第二組圖片和內容 */}
        <div className="row align-items-center mb-4 mt-5">
          <div
            className="col-5"
            style={{ paddingLeft: "20%", textAlign: "left" }}
          >
            <div className="mb-3 d-flex align-items-center">
              <img
                src="./img/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">全程實況回報</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img
                src="./img/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">預先免費面談</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img
                src="./img/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">預先參觀環境</p>
            </div>
          </div>
          <div className="col-7 d-flex justify-content-center">
            <img
              src="./img/為什信任寵樂2.png"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* 毛孩推薦保母 */}
      <h2
        className="fw-bold fs-2 text-center"
        style={{ margin: "150px 0 50px 0" }}
      >
        毛孩家長推薦NO.1保母
      </h2>
      <div className="d-flex justify-content-center flex-wrap">
        <div
          className="card me-3 mb-3"
          style={{ width: "250px", borderRadius: "30px", overflow: "hidden" }}
        >
          <img
            src="/image/南瓜.jpg"
            className="card-img-top"
            style={{ height: "70%", objectFit: "cover" }}
            alt=""
          />
          <div className="card-body text-center">
            <div className="d-flex justify-content-between">
              <div>
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
              </div>
              <p>155則評論</p>
            </div>
            <h5 className="card-title">小黑的媽媽</h5>
            <p className="card-text">$300NTD</p>
          </div>
        </div>
        <div
          className="card me-3 mb-3"
          style={{ width: "250px", borderRadius: "30px", overflow: "hidden" }}
        >
          <img
            src="/image/南瓜.jpg"
            className="card-img-top"
            style={{ height: "70%", objectFit: "cover" }}
            alt=""
          />
          <div className="card-body text-center">
            <div className="d-flex justify-content-between">
              <div>
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
              </div>
              <p>155則評論</p>
            </div>
            <h5 className="card-title">小黑的媽媽</h5>
            <p className="card-text">$300NTD</p>
          </div>
        </div>
        <div
          className="card me-3 mb-3"
          style={{ width: "250px", borderRadius: "30px", overflow: "hidden" }}
        >
          <img
            src="/image/南瓜.jpg"
            className="card-img-top"
            style={{ height: "70%", objectFit: "cover" }}
            alt=""
          />
          <div className="card-body text-center">
            <div className="d-flex justify-content-between">
              <div>
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
              </div>
              <p>155則評論</p>
            </div>
            <h5 className="card-title">小黑的媽媽</h5>
            <p className="card-text">$300NTD</p>
          </div>
        </div>
        <div
          className="card me-3 mb-3"
          style={{ width: "250px", borderRadius: "30px", overflow: "hidden" }}
        >
          <img
            src="/image/南瓜.jpg"
            className="card-img-top"
            style={{ height: "70%", objectFit: "cover" }}
            alt=""
          />
          <div className="card-body text-center">
            <div className="d-flex justify-content-between">
              <div>
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
              </div>
              <p>155則評論</p>
            </div>
            <h5 className="card-title">小黑的媽媽</h5>
            <p className="card-text">$300NTD</p>
          </div>
        </div>
        <div
          className="card me-3 mb-3"
          style={{ width: "250px", borderRadius: "30px", overflow: "hidden" }}
        >
          <img
            src="/image/南瓜.jpg"
            className="card-img-top"
            style={{ height: "70%", objectFit: "cover" }}
            alt=""
          />
          <div className="card-body text-center">
            <div className="d-flex justify-content-between">
              <div>
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
                <img src="./img/Star.png" alt="" />
              </div>
              <p>155則評論</p>
            </div>
            <h5 className="card-title">小黑的媽媽</h5>
            <p className="card-text">$300NTD</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default NannyMain;
