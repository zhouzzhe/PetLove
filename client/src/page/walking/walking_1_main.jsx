import React from "react";

function WalkingMain(prop) {
  return (
    <React.Fragment>
      <div className="position-relative mt-5">
        <div className="container p-5 border-bottom border-3 border-danger">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 border bg-black">
                <img
                  src="/image/皇后瑪格2021.png"
                  alt="..."
                  style={{ height: "500px", width: "300px" }}
                ></img>
              </div>
            </div>
            <div className="col">
              <div className="p-5 border bg-light d-grid gap-5">
                <h2>我現在需要遛狗！</h2>
                <h3>打造適合毛孩子的代客遛狗服務</h3>
                <h3 className="text-danger">全程攝影回報、GPS查看地點</h3>
                <div>
                  <a href="/walking/reserve" className="btn btn-warning ms-5">獲取報價GO</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="position-relative mx-3 my-5">
          <div className="row justify-content-between m-auto px-3 py-1 w-75 border align-items-center">
            <div className="col-2 text-center bg-warning px-3 py-1">
              新用戶限定
            </div>
            <div className="col-8">
              限量首次下訂優惠「#PetLove100」服務立即折抵$100
              ，數量有限，立即領取優惠、預約寵物保姆！
            </div>
            <div className="col-2 justify-content-center">
              <button className="btn btn-danger">立即領取</button>
            </div>
          </div>
        </div>

        <div className="row m-5 rounded-5 bg-warning position-relative">
          <div className="col-6 p-5">
            <figure className="figure">
              <img
                src="/image/皇后瑪格2021.png"
                alt="image-onload..."
                className="img-fluid figure-img"
              ></img>
              <figcaption className="figure-caption text-center fs-3">
                等人陪伴玩耍
              </figcaption>
            </figure>
          </div>
          <div className="col-6 p-5">
            <figure className="figure">
              <img
                src="/image/皇后瑪格2021.png"
                alt="image-onload..."
                className="img-fluid figure-img"
              ></img>
              <figcaption className="figure-caption text-center fs-3">
                幫忙帶狗出門散步
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="container justify-content-center border-top border-3 border-danger my-5 py-5">
          <div className="text-center fs-3">毛孩家長推薦代遛</div>
          <div className="text-center fs-4">五星⭐️好評</div>
        </div>

        <div className="p-4 m-4">
          <div className="row mx-0">
            <div className="col-1"> 往左 </div>
            <div className="col-10">
              <div className="row">
                <div className="col-3">
                  <div
                    className="card"
                    style={{ width: "350px", height: "324px" }}
                  >
                    <img
                      src="/image/皇后瑪格2021.png"
                      className="card-img-top"
                      alt="..."
                      style={{ width: "263px", height: "324px" }}
                    ></img>
                    <div className="card-body">
                      <div className="card-text text-center">五星好評</div>
                      <div className="card-text text-center">小黑的媽媽</div>
                      <div className="card-text text-center">300 NTD</div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="card"
                    style={{ width: "350px", height: "324px" }}
                  >
                    <img
                      src="/image/皇后瑪格2021.png"
                      className="card-img-top"
                      alt="..."
                      style={{ width: "263px", height: "324px" }}
                    ></img>
                    <div className="card-body">
                      <div className="card-text text-center">五星好評</div>
                      <div className="card-text text-center">小黑的媽媽</div>
                      <div className="card-text text-center">300 NTD</div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="card"
                    style={{ width: "350px", height: "324px" }}
                  >
                    <img
                      src="/image/皇后瑪格2021.png"
                      className="card-img-top"
                      alt="..."
                      style={{ width: "263px", height: "324px" }}
                    ></img>
                    <div className="card-body">
                      <div className="card-text text-center">五星好評</div>
                      <div className="card-text text-center">小黑的媽媽</div>
                      <div className="card-text text-center">300 NTD</div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div
                    className="card"
                    style={{ width: "350px", height: "324px" }}
                  >
                    <img
                      src="/image/皇后瑪格2021.png"
                      className="card-img-top"
                      alt="..."
                      style={{ width: "263px", height: "324px" }}
                    ></img>
                    <div className="card-body">
                      <div className="card-text text-center">五星好評</div>
                      <div className="card-text text-center">小黑的媽媽</div>
                      <div className="card-text text-center">300 NTD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1"> 往右 </div>
          </div>
        </div>
      </div>

      <script>w3.includeHTML();</script>
    </React.Fragment>
  );
}

export default WalkingMain;
