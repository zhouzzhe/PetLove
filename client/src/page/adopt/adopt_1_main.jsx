import React, { Component, useReducer, useState, useEffect } from "react";
import "../../style/adopt_1_main.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "../../style/paginate.css"
// import { Card } from "@douyinfe/semi-ui";

function AdoptMain() {
  // 設定頁面data初始值
  const [data, setData] = useState([]);
  // 頁碼按鈕
  const [maxPage, setMaxPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = (event) => {
    // console.log(event.selected);
    setCurrentPage(event.selected);
  };

  // 從後端抓取資料
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/adopt/page=${currentPage + 1}`,
        { params: { petType, petSex } }
      );
      console.log(response.data);
      setData(response.data.data);
      setMaxPage(response.data.lastPage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // 設定上一頁跟下一頁的按鈕
  // function reducer(state, action) {
  //   switch (action.type) {
  //     case "nextPage":
  //       return { currentPage: state.currentPage + 1 };
  //     case "prevPage":
  //       return {
  //         currentPage: state.currentPage > 1 ? state.currentPage - 1 : 1,
  //       };
  //     case "gotoPage":
  //       return { currentPage: state.currentPage };
  //     default:
  //       return state;
  //   }
  // }

  // const initialPage = Number(prop.match.params.page) || 1;
  // const [state, dispatch] = useReducer(reducer, { currentPage: initialPage });
  // let nextPage = () => dispatch({ type: "nextPage" });
  // let prevPage = () => dispatch({ type: "prevPage" });
  // let gotoPage = () => dispatch({ type: "gotoPage" });
  // // console.log(prop);
  // // console.log(state);
  // // console.log(state.currentPage);
  // // console.log(prop.match.params.page);

  // // 設定頁碼
  // const numsPerPage = 9;
  // // const totalData = 6899;
  // const totalData = data[1];
  // // console.log(totalData);
  // const maxPage = Math.ceil(totalData / numsPerPage);
  // // const maxPage = 12;
  // // console.log(maxPage);

  // const items = [...Array(maxPage).keys()]
  //   .map((key) => key + 1)
  //   .map((page) => ({
  //     type: "page",
  //     isCurrent: state.currentPage === page ? "true" : "false",
  //     page,
  //     onClick: { gotoPage },
  //   }));
  // // console.log(items);

  // const markedItems = items.map((item) => {
  //   const { page } = item;
  //   if (
  //     page === maxPage ||
  //     page === 1 ||
  //     page === state.currentPage ||
  //     page === state.currentPage + 1 ||
  //     page === state.currentPage - 1
  //   ) {
  //     return item;
  //   }
  //   return {
  //     ...item,
  //     type: item.page > state.currentPage ? "end-ellipsis" : "start-ellipsis",
  //   };
  // });

  // const ellipsisItem = markedItems.filter((item, index) => {
  //   if (
  //     item.type === "start-ellipsis" &&
  //     markedItems[index + 1].type === "start-ellipsis"
  //   ) {
  //     return false;
  //   }
  //   if (
  //     item.type === "end-ellipsis" &&
  //     markedItems[index + 1].type === "end-ellipsis"
  //   ) {
  //     return false;
  //   }
  //   return true;
  // });
  // // console.log(ellipsisItem);

  // 表單狀態設定
  const [petType, setPetType] = useState("");
  const typeButtonHandle = (event) => {
    // console.log(event.target.value);
    setPetType(event.target.value);
  };
  const [petSex, setPetSex] = useState("");
  const sexButtonHandle = (event) => {
    // console.log(event.target.value);
    setPetSex(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // 防止表單跳轉頁面
    setCurrentPage(0);
    fetchData();
  };

  // 畫面變動就抓一次資料
  React.useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <React.Fragment>
      <p className="fs-2 fw-bold d-flex justify-content-center">
        尋找有緣毛小孩
      </p>
      <form id="submit" onSubmit={handleSubmit}>
        <div className="searchAdoptFormDiv">
          <div className="radius30px searchAdoptForm col-8">
            {/* 種類 */}
            <div className="petOption">
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
            {/* 性別 */}
            <p className="text-center fs-5">寵物性別</p>
            <div className="petGender">
              <input
                type="radio"
                className="btn-check"
                name="petSex"
                id="maleButton"
                autoComplete="off"
                value={"M"}
                onClick={sexButtonHandle}
              ></input>
              <label
                className="btn custom-button btn-outline-warning"
                htmlFor="maleButton"
              >
                公
              </label>
              <input
                type="radio"
                className="btn-check"
                name="petSex"
                id="femaleButton"
                autoComplete="off"
                value={"F"}
                onClick={sexButtonHandle}
              ></input>
              <label
                className="btn custom-button btn-outline-warning"
                htmlFor="femaleButton"
              >
                母
              </label>
              <input
                type="radio"
                className="btn-check"
                name="petSex"
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
            {/* 體型 */}
            <p className="text-center fs-5">寵物體型</p>
            <div className="selectAgeDiv">
              <select className="radius30px selectAge">
                <option value="big">大</option>
                <option value="medium">中</option>
                <option value="small">小</option>
              </select>
            </div>
          </div>
          {/* 找尋按鈕 */}
          <div className="searchButton">
            <button className="radius30px" id="submit" type="submit">
              找尋
            </button>
          </div>
        </div>
      </form>

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
          {data.map((adoptItem, index) => (
            <div key={index} className="col-4">
              <div className="mx-4 my-3 border border-3">
                <img
                  onError={(e) => {
                    e.target.src = "/image/大頭照.png"; // 替代圖片的路徑
                  }}
                  src={`${adoptItem.album_file}`}
                  alt="沒有照片"
                  style={{ height: "340px", width: "400px" }}
                ></img>
                <div className="row">
                  <div className="col-6">品種：{adoptItem.animal_variety}</div>
                  <div className="col-6">毛色：{adoptItem.animal_color}</div>
                </div>
                <div>性別：{adoptItem.animal_sex === "F" ? "母" : "公"}</div>
                <div className="d-flex justify-content-between">
                  <div className="">體型：{adoptItem.animal_bodytype}</div>
                  <a
                    href={`/adopt/info/item=${adoptItem.list_id}`}
                    className="btn btn-warning"
                  >
                    看更多
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center my-3">
        <ReactPaginate
          previousLabel="< 上一頁"
          nextLabel="下一頁 >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2} //顯示的連續頁碼數量
          marginPagesDisplayed={2} //開頭結尾顯示?個頁碼
          pageCount={maxPage} //指定總頁數
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active" //選取顯示樣式
          breakClassName="break"
          renderOnZeroPageCount={null} //頁數為0時不渲染分頁內容
        />
      </div>
    </React.Fragment>
  );
}

export default AdoptMain;
