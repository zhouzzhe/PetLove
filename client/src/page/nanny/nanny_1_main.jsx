import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../style/nanny_1_main.css";
import { DatePicker } from "@douyinfe/semi-ui";

function NannyMain(prop) {
  const [data, setData] = useState([
    {
      user_id: 1,
      user_name: "井口理",
      user_distance: "200",
      user_price: "5880",
    },
  ]);

  const [petType, setPetType] = useState("");
  const typeButtonHandle = (event) => {
    // console.log(event.target.value);
    setPetType(event.target.value);
  };
  const [nannySex, setNannySex] = useState("");
  const sexButtonHandle = (event) => {
    // console.log(event.target.value);
    setNannySex(event.target.value);
  };





  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/nanny`);
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {/* 尋找寵物保母表單 */}
      <h2 className="fw-bold fs-2 text-center mb-5">尋找寵物保母</h2>
      <form id="submit">
        <div className="searchNannyFormDiv">
          <div className="searchNannyForm col-10">
          <p className="gender">所在地區</p>
            <div className="NannyFormOption">
              <select className="selectCity">
                <option>台中市</option>
              </select>
              <select className="selectCity">
                <option>西屯區</option>
              </select>
            </div>
            <p className="gender">寵物類型</p>
            <div className="NannyFormOption">
              <input
                type="radio"
                className="btn-check"
                name="petType"
                id="dogButton"
                autoComplete="off"
                value={"狗"}
                onClick={typeButtonHandle}
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
                onClick={typeButtonHandle}
              ></input>
              <label
                className="btn custom-button btn-outline-warning"
                htmlFor="catButton"
              >
                小貓貓
              </label>{" "}
            </div>
            <p className="gender">保母性別</p>
            <div className="NannyFormOption">
              <input
                type="radio"
                className="btn-check"
                name="nannySex"
                id="boyButton"
                autoComplete="off"
                value={"男"}
                onClick={sexButtonHandle}
              ></input>
              <label
                className="btn custom-button btn-outline-warning"
                htmlFor="boyButton"
              >
                男
              </label>
              <input
                type="radio"
                className="btn-check"
                name="nannySex"
                id="girlButton"
                autoComplete="off"
                value={"女"}
                onClick={sexButtonHandle}
              ></input>
              <label
                className="btn custom-button btn-outline-warning"
                htmlFor="girlButton"
              >
                女
              </label>
              <input
                type="radio"
                className="btn-check"
                name="nannySex"
                id="allButton"
                autoComplete="off"
                value={"不限"}
                onClick={sexButtonHandle}
              ></input>
              <label
                className="btn custom-button btn-outline-warning"
                htmlFor="allButton"
              >
                不限
              </label>{" "}
            </div>
            <p className="reservation">預約日期</p>
            <div className="NannyFormOption">
              <div className="d-flex align-items-center gap-5">
                <DatePicker
                  className=" w-100 border border-1 rounded-3"
                  placeholder="請選擇日期"
                  insetLabel="開始日期"
                  style={{ width: 360 }}
                  // onChange={setApplicationTime}
                  id="exampleFormControlInput0"
                />
                <p>至</p>
                <DatePicker
                  className=" w-100 border border-1 rounded-3"
                  placeholder="請選擇日期"
                  insetLabel="結束日期"
                  style={{ width: 360 }}
                  // onChange={setApplicationTime}
                  id="exampleFormControlInput0"
                />
              </div>
            </div>
          </div>
          <div className="searchNannyButton my-5">
            <button className>尋找優質保母</button>
          </div>
        </div>
      </form>

      {/* 優質保母任你選 */}
      <div className="chooseNannyContainer">
        <h2 className="fw-bold fs-2 text-center my-5">優質寵物保母任你選</h2>
        <div>
          <div className="nannySort p-0">
            <p>排序 : </p>
            <select>
              <option>依距離</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center mx-5">
          {data.map((cardItem,index) => (
            <div key={index} className="col-xxxl-3 mb-4">
              <a
                href={`/nanny/id=${cardItem.user_id}/info`}
                className="text-decoration-none text-dark"
              >
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
                      <div>{cardItem.user_name}</div>
                      <div className="mb-1">
                        <img src="./img/Star.png" alt="" />
                        <img src="./img/Star.png" alt="" />
                        <img src="./img/Star.png" alt="" />
                        <img src="./img/Star.png" alt="" />
                        <img src="./img/Star.png" alt="" />
                      </div>
                      <div>155則評論</div>
                    </div>
                    <div>距離{cardItem.user_distance}公里</div>
                    <div>TWD {cardItem.user_price}</div>
                  </div>
                </div>
              </a>
            </div>
          ))}
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
              src="/image/什麼樣適合1.png"
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
              src="/image/什麼樣適合2.png"
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
              src="/image/為什性任寵樂1.png"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="col-5" style={{ textAlign: "right" }}>
            <div className="mb-3 d-flex align-items-center">
              <img
                src="/image/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">實名認證</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img
                src="/image/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">良民證</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img
                src="/image/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">公開真實評價</p>
            </div>
          </div>
        </div>
        {/* 第二組圖片和內容 */}
        <div className="row align-items-center my-5">
          <div
            className="col-5"
            style={{ paddingLeft: "20%", textAlign: "left" }}
          >
            <div className="mb-3 d-flex align-items-center">
              <img
                src="/image/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">全程實況回報</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img
                src="/image/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">預先免費面談</p>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img
                src="/image/checked.png"
                alt=""
                className="mr-2"
                style={{ maxWidth: "50px", height: "auto" }}
              />
              <p className="mt-5 ms-4 fw-bold fs-5">預先參觀環境</p>
            </div>
          </div>
          <div className="col-7 d-flex justify-content-center">
            <img
              src="/image/為什信任寵樂2.png"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
      {/* 毛孩推薦保母 */}
      {/* <h2
        className="fw-bold fs-2 text-center"
        style={{ margin: "150px 0 50px 0" }}
      >
        毛孩家長推薦NO.1保母
      </h2>
      <div className="d-flex justify-content-center flex-wrap mb-5">
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
      </div> */}
    </React.Fragment>
  );
}
export default NannyMain;
