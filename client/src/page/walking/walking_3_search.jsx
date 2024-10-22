import React, { useEffect, useState } from "react";
import axios from "axios";

function WalkingSearch() {
  const [data, setData] = useState([
    {
      user_id: 1,
      userPhoto: "/image/皇后瑪格2021.png",
      user_name: "zzhe",
      distance: "100",
      evaluate: 3,
      user_price: "5000",
      Comment: 20,
    },
    {
      user_id: 2,
      userPhoto: "/image/皇后瑪格2021.png",
      user_name: "zzzzzzzhe",
      distance: "10000",
      evaluate: 5,
      user_price: "3000",
      Comment: 15,
    },
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/walking`);
      console.log(response.data);
      // setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="position-relative mt-5">
        <div className="d-flex justify-content-center w-100 fs-2 py-5 ">
          優質代遛任您挑選
        </div>
        <div className="container">
          <div className="d-flex justify-content-end align-items-center">
            <div className="px-2">排序</div>
            <select
              className="text-center"
              name="order"
              id=""
              style={{ width: "150px" }}
            >
              <option value="">依距離</option>
              <option value="">依時間</option>
            </select>
          </div>

          {data.map((item) => (
            <div
              className="row d-flex border border-3 border-danger rounded-3 p-2 my-5"
              key={item.userId}
            >
              <div className="col-3">
                <img
                  className="bg-info"
                  src={item.userPhoto}
                  alt="...loading"
                  style={{ width: "300px", height: "255px" }}
                ></img>
              </div>
              <div className="col-3 d-grid p-5 align-items-center">
                <div className="fs-3 fw-bold">{item.user_name}</div>
                <div>{Array(item.evaluate).fill("⭐")}</div>
                <div
                  className="text-decoration-underline"
                  style={{ color: "gray" }}
                >
                  {item.Comment}則評論
                </div>
              </div>
              <div className="col-3 text-center my-auto fs-5">
                距離你{item.distance}公里
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center text-center fs-3 bg-warning">
                NTD{item.user_price}
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-center align-items-center text-center">
            <div className="row w-25 my-5">
              <div className="col-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="32"
                  viewBox="0 0 27 32"
                  fill="none"
                >
                  <path
                    d="M7.86805e-07 16L27 31.5885L27 0.411542L7.86805e-07 16Z"
                    fill="#FF6144"
                  />
                </svg>
              </div>
              <div className="col-2">1</div>
              <div className="col-2">2</div>
              <div className="col-2">3</div>
              <div className="col-2">4</div>
              <div className="col-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="32"
                  viewBox="0 0 27 32"
                  fill="none"
                >
                  <path
                    d="M27 16L-1.4682e-06 31.5885L-1.05412e-07 0.411542L27 16Z"
                    fill="#FF6144"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default WalkingSearch;
