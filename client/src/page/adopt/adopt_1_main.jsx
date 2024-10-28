import React, { Component, useReducer, useState, useEffect } from "react";
import "../../style/adopt_1_main.css";
import axios from "axios";


function AdoptMain(prop) {
  // 從後端抓取資料
  const [data, setData] = React.useState([[], []]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/adopt/page=${state.currentPage}`
      );
      // console.log(response.data.results);
      setData(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // 畫面變動就抓一次資料
  React.useEffect(() => {
    fetchData();
  }, []);

  // 設定上一頁跟下一頁的按鈕
  function reducer(state, action) {
    switch (action.type) {
      case "nextPage":
        return { currentPage: state.currentPage + 1 };
      case "prevPage":
        return {
          currentPage: state.currentPage > 1 ? state.currentPage - 1 : 1,
        };
      case "gotoPage":
        return { currentPage: state.currentPage };
      default:
        return state;
    }
  }

  const initialPage = Number(prop.match.params.page) || 1;
  const [state, dispatch] = useReducer(reducer, { currentPage: initialPage });
  let nextPage = () => dispatch({ type: "nextPage" });
  let prevPage = () => dispatch({ type: "prevPage" });
  let gotoPage = () => dispatch({ type: "gotoPage" });
  // console.log(prop);
  // console.log(state);
  // console.log(state.currentPage);
  // console.log(prop.match.params.page);

  // 設定頁碼
  const numsPerPage = 9;
  // const totalData = 6899;
  const totalData = data[1];
  // console.log(totalData);
  const maxPage = Math.ceil(totalData / numsPerPage);
  // const maxPage = 12;
  // console.log(maxPage);

  const items = [...Array(maxPage).keys()]
    .map((key) => key + 1)
    .map((page) => ({
      type: "page",
      isCurrent: state.currentPage === page ? "true" : "false",
      page,
      onClick: { gotoPage },
    }));
  // console.log(items);

  const markedItems = items.map((item) => {
    const { page } = item;
    if (
      page === maxPage ||
      page === 1 ||
      page === state.currentPage ||
      page === state.currentPage + 1 ||
      page === state.currentPage - 1
    ) {
      return item;
    }
    return {
      ...item,
      type: item.page > state.currentPage ? "end-ellipsis" : "start-ellipsis",
    };
  });

  const ellipsisItem = markedItems.filter((item, index) => {
    if (
      item.type === "start-ellipsis" &&
      markedItems[index + 1].type === "start-ellipsis"
    ) {
      return false;
    }
    if (
      item.type === "end-ellipsis" &&
      markedItems[index + 1].type === "end-ellipsis"
    ) {
      return false;
    }
    return true;
  });
  // console.log(ellipsisItem);

  return (
    <React.Fragment>
      <p className="fs-2 fw-bold d-flex justify-content-center">
        尋找有緣毛小孩
      </p>
      <div className="searchAdoptFormDiv">
        <form action="" className="radius30px searchAdoptForm col-8">
          <div className="petOption">
            <button className="custom-button">小貓貓</button>
            <button className="custom-button">小狗狗</button>
          </div>
          <p className="text-center fs-5">寵物性別</p>
          <div className="petGender">
            <button className="custom-button">男</button>
            <button className="custom-button">女</button>
            <button className="custom-button">不限</button>
          </div>
          <p className="text-center fs-5">寵物年齡</p>
          <div className="selectAgeDiv">
            <select className="radius30px selectAge">
              <option value="3">3歲</option>
            </select>
          </div>
        </form>
        <div className="searchButton">
          <button className="radius30px">找尋</button>
        </div>
      </div>
      <hr
        style={{
          border: "3px solid #ff6144",
          opacity: "100",
          width: "90%",
          margin: "50px auto",
        }}
      ></hr>
      <div className="nannySort">
        <p>排序 : </p>
        <select>
          <option>依年齡</option>
        </select>
      </div>

      <div className="mx-auto" style={{ width: "80%" }}>
        <div className="row">
          {data[0].map((adoptItem, index) => (
            <div key={index} className="col-4">
              <div className="mx-4 my-3 border border-3">
                <img
                  src={`${adoptItem.album_file}`}
                  alt=""
                  style={{ height: "340px", width: "400px" }}
                ></img>
                <div className="row">
                  <div className="col-6">{adoptItem.animal_variety}</div>
                  <div className="col-6">{adoptItem.animal_color}</div>
                </div>
                <div>{adoptItem.animal_sex==="F"?"女":"男"}</div>
                <div className="d-flex justify-content-between">
                  <div className="">兩個月大</div>
                  <a href={`/adopt/info/item=${adoptItem.list_id}`} className="btn btn-warning">看更多</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="choosepage">
        <a href={`/adopt/page=${state.currentPage}`}>
          <img src="./img/triangle1.png" alt="三角形" onClick={prevPage}></img>
        </a>

        <div>
          <table>
            <tfoot>
              <tr>
                {ellipsisItem.map((item) => {
                  if (item.type === "page") {
                    return (
                      <td
                        key={item.page}
                        iscurrent={item.isCurrent}
                        style={{ textAlign: "center" }}
                      >
                        <a href={`/adopt/page=${item.page}`}>{item.page}</a>
                      </td>
                    );
                  }
                  return (
                    <td key={item.page} style={{ color: "blue" }}>
                      ...
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>

        <a href={`/adopt/page=${state.currentPage}`}>
          <img src="./img/triangle2.png" alt="三角形" onClick={nextPage}></img>
        </a>
      </div>
    </React.Fragment>
  );
}

export default AdoptMain;
