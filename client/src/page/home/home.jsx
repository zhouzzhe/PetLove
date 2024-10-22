import React from "react";
import "../../style/home.css";

function homeMain() {
  return (
    <React.Fragment>
      {/* <!-- 輪播圖 --> */}
      <div className="d-flex justify-content-center align-items-center">
        <div className="carousel-container" id="carousel">
          <div
            id="store-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#store-carousel"
                data-bs-slide-to="0"
                className="active"
              ></button>
              <button
                type="button"
                data-bs-target="#store-carousel"
                data-bs-slide-to="1"
              ></button>
              <button
                type="button"
                data-bs-target="#store-carousel"
                data-bs-slide-to="2"
              ></button>
              <button
                type="button"
                data-bs-target="#store-carousel"
                data-bs-slide-to="3"
              ></button>
              <button
                type="button"
                data-bs-target="#store-carousel"
                data-bs-slide-to="4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active store-item">
                <img
                  src="https://cdn-v2.litomon.com/prod/2019/01/28/349/kittenfood_Cslide.jpg.webp"
                  className="d-block w-100 store-img"
                  alt=""
                />
              </div>
              <div className="carousel-item store-item">
                <img
                  src="https://cdn-v2.litomon.com/prod/2019/01/28/349/%E5%AF%B6%E5%AF%B6%E7%BD%90SL_%E9%9B%BB%E8%85%A6%E7%89%88.jpg.webp"
                  className="d-block w-100 store-img"
                  alt=""
                />
              </div>

              <div className="carousel-item store-item">
                <img
                  src="https://cdn-v2.litomon.com/prod/2019/01/28/349/SL%E9%9B%BB%E8%85%A6%E7%89%88.jpg.webp"
                  className="d-block w-100 store-img"
                  alt=""
                />
              </div>
              <div className="carousel-item store-item">
                <img
                  src="https://cdn-v2.litomon.com/prod/2019/01/28/349/%E4%B8%BB%E9%A3%9F%E7%BD%90SC01.jpg.webp"
                  className="d-block w-100 store-img"
                  alt="林口店4"
                />
              </div>
              <div className="carousel-item store-item">
                <img
                  src="https://cdn-v2.litomon.com/prod/2019/01/28/349/%E5%AE%98%E7%B6%B2%E6%B4%BB%E5%8B%95SLIDER_%E8%B2%93%E7%A0%82%E6%B4%BB%E5%8B%95_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F-1.png.webp"
                  className="d-block w-100 store-img"
                  alt=""
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#store-carousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#store-carousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- 輪播圖 --> */}

      {/* <!-- <hr color="#ff6144" noshade="noshade" /> --> */}
      {/* <!-- 跑馬字串上 --> */}
      <div className="marquee1-container">
        <div className="marquee1">
          <p>
            寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!
            寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!
            寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!
            寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!
            寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!
            寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!寵樂!!!
          </p>
        </div>
      </div>
      {/* <!-- 跑馬字串上 --> */}

      {/* <!-- 下面全部 --> */}
      <div className="DownAll">
        {/* <!-- 服務項目 --> */}
        <div className="section">
          <div className="d-flex justify-content-center">
            <p className="title">服務項目</p>
          </div>

          <div className="d-flex flex-wrap justify-content-center">
            {/* <!-- 服務項目1 --> */}
            <div className="mx-3 serveBox d-flex flex-wrap justify-content-center align-items-center">
              <img src="https://media.istockphoto.com/id/1388719795/photo/asian-women-viewing-real-estate-websites-on-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=8VaDYrMJL6LCjSEgZEU6LwkTrY0Wq8RJ76phq68l9zc=" />
              <p className="fs-4 fw-bold">代遛服務</p>
            </div>
            {/* <!-- 服務項目1 --> */}

            {/* <!-- 服務項目2 --> */}
            <div className="mx-3 serveBox d-flex flex-wrap justify-content-center align-items-center">
              <img src="https://media.istockphoto.com/id/1388719795/photo/asian-women-viewing-real-estate-websites-on-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=8VaDYrMJL6LCjSEgZEU6LwkTrY0Wq8RJ76phq68l9zc=" />
              <p className="fs-4 fw-bold">毛孩保母</p>
            </div>
            {/* <!-- 服務項目2 --> */}

            {/* <!-- 服務項目3 --> */}
            <div className="mx-3 serveBox d-flex flex-wrap justify-content-center align-items-center">
              <img src="https://media.istockphoto.com/id/1388719795/photo/asian-women-viewing-real-estate-websites-on-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=8VaDYrMJL6LCjSEgZEU6LwkTrY0Wq8RJ76phq68l9zc=" />
              <p className="fs-4 fw-bold">毛孩領養</p>
            </div>
            {/* <!-- 服務項目3 --> */}

            {/* <!-- 服務項目4 --> */}
            <div className="mx-3 serveBox d-flex flex-wrap justify-content-center align-items-center">
              <img src="https://media.istockphoto.com/id/1388719795/photo/asian-women-viewing-real-estate-websites-on-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=8VaDYrMJL6LCjSEgZEU6LwkTrY0Wq8RJ76phq68l9zc=" />
              <p className="fs-4 fw-bold">添購商品</p>
            </div>
            {/* <!-- 服務項目4 --> */}
          </div>
        </div>
        {/* <!-- 服務項目 --> */}

        {/* <!-- 流程說明 --> */}
        <div className="section">
          <div className="d-flex justify-content-center" id="step">
            <p className="title">流程說明</p>
          </div>

          <div className="d-flex flex-wrap justify-content-center">
            {/* <!-- 流程步驟1 --> */}
            <div className="mx-3 stepBox d-flex flex-wrap justify-content-center align-items-center">
              <img src="https://media.istockphoto.com/id/1388719795/photo/asian-women-viewing-real-estate-websites-on-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=8VaDYrMJL6LCjSEgZEU6LwkTrY0Wq8RJ76phq68l9zc=" />

              <div className="d-flex m-1">
                <i className="mt-1 bi bi-1-circle-fill"></i>
                <p className="mt-3 fs-4">搜尋合適保姆</p>
              </div>
              <div className="m-1">
                <p>尋找適合保母或遛狗者</p>
              </div>
            </div>
            {/* <!-- 流程步驟1 --> */}

            {/* <!-- 流程步驟2 --> */}
            <div className="mx-3 stepBox d-flex flex-wrap justify-content-center align-items-center">
              <img src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

              <div className="d-flex m-1">
                <i className="mt-1 bi bi-2-circle-fill"></i>
                <p className="mt-3 fs-4">發出請求</p>
              </div>
              <div className="m-1">
                <p>向合適保姆或遛狗者發出請求及聯繫</p>
              </div>
            </div>
            {/* <!-- 流程步驟2 --> */}

            {/* <!-- 流程步驟3 --> */}
            <div className="mx-3 stepBox d-flex flex-wrap justify-content-center align-items-center">
              <img src="https://media.istockphoto.com/id/459429875/photo/business-colleagues-discussing.jpg?s=612x612&w=0&k=20&c=jtHwLuYYzdg9TtMOyRbDGjJy6qCuZJUdXrRde5Zfr8M=" />

              <div className="d-flex m-1">
                <i className="mt-1 bi bi-3-circle-fill"></i>
                <p className="mt-3 fs-4">付款及會面</p>
              </div>
              <div className="m-1">
                <p>線上付款後，即可安排會面</p>
              </div>
            </div>
            {/* <!-- 流程步驟3 --> */}

            {/* <!-- 流程步驟4 --> */}
            <div className="mx-3 stepBox d-flex flex-wrap justify-content-center align-items-center">
              <img src="https://media.istockphoto.com/id/1198100351/photo/portrait-of-beautiful-and-fluffy-tri-colored-tabby-cat-at-home-natural-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=sLI0fE7hD16q5k8YVhnGKQiV6LXoA9SzksZNbftX1b4=" />

              <div className="d-flex m-1">
                <i className="mt-1 bi bi-4-circle-fill"></i>
                <p className="mt-3 fs-4">確認合適度</p>
              </div>
              <div className="m-1">
                <p>在開始服務後，若發現保母不合適，可進行更換</p>
              </div>
            </div>
            {/* <!-- 流程步驟4 --> */}
          </div>
        </div>
        {/* <!-- 流程說明 --> */}

        {/* <!-- 加入我們 --> */}
        <div className="section joinUs d-flex justify-content-center align-items-center">
          <div>
            <img src="https://plus.unsplash.com/premium_photo-1661896746165-b95b72a6e9e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>

          <div className="joinContext">
            <p className="title">開放加入</p>
            <p>歡迎有興趣的夥伴加入，成為寵物保母或代遛幫手</p>
            <button className="me-5">成為寵物保母</button>
            <button className="me-5">成為代遛幫手</button>
          </div>
        </div>
        {/* <!-- 加入我們 --> */}

        {/* <!-- 關於我們 --> */}
        <div className="section">
          <div className="d-flex flex-wrap justify-content-center">
            <p className="title">關於我們</p>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <p className="concept">寵樂提供最優質的服務給每一位毛小孩</p>
          </div>

          {/* <!-- 圖片跑馬 --> */}
          <div className="marquee2-container">
            <div className="marquee2">
              <p>
                <img
                  src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </p>
            </div>
          </div>
          {/* <!-- 圖片跑馬 --> */}
        </div>
        {/* <!-- 關於我們 --> */}
      </div>
      {/* <!-- 下面全部 --> */}
    </React.Fragment>
  );
}
export default homeMain