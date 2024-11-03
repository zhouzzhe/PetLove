import React, { useEffect } from "react";
import "../../style/home-new.css";

function HomeMain() {
  useEffect(() => {
    //鼠標icon
    document.addEventListener("mousemove", function (event) {
      const followIcon = document.getElementById("follow-icon");
      const x = event.clientX;
      const y = event.clientY;
      followIcon.style.transform = `translate(${x}px, ${y}px)`;
      followIcon.style.zIndex = "1000";
    });
    //鼠標icon

    //GoTop 顯示
    window.addEventListener("scroll", () => {
      const goTopButton = document.querySelector(".goTop");
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition > documentHeight * 0.2) {
        goTopButton.style.display = "block"; // 顯示按鈕
      } else {
        goTopButton.style.display = "none"; // 隐藏按钮
      }
    });
    //GoTop 顯示

    //底marquee0 顯示
    window.addEventListener("scroll", () => {
      const marquee0 = document.querySelector(".marquee0-container");
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition > documentHeight * 0.2) {
        marquee0.style.display = "block"; // 显示按钮
      } else {
        marquee0.style.display = "none"; // 隐藏按钮
      }
    });
    //底marquee0 顯示

    // 測試滾動放大效果
    // const myLogo = document.querySelector(".myLogo");
    // window.addEventListener("scroll", () => {
    //   const scrollY = window.scrollY; // 當前的滾動位置
    //   const scale = 1 + scrollY / 1000; // 根據滾動位置計算放大比例
    //   myLogo.style.transform = `scale(${scale})`; // 設置放大效果
    // });
    // 測試滾動放大效果

    //滾動 左邊滑出卡片 YES 完成！！
    window.addEventListener("scroll", () => {
      const Section1 = document.querySelector(".showSection1");
      const section1Rect = Section1.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const showSection1 = windowHeight * 0.9;

      // 使用 sectionRect.top 來檢查
      if (showSection1 > section1Rect.top) {
        Section1.style.transform = `translateX(0)`;
      } else {
        Section1.style.transform = `translateX(-100%)`;
      }
    });
    //滾動 左邊滑出卡片 YES 完成！！

    //滾動 右邊滑出卡片 YES 完成！！
    window.addEventListener("scroll", () => {
      const Section2 = document.querySelector(".showSection2");
      const section2Rect = Section2.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const showSection2 = windowHeight * 0.9;

      // 使用 sectionRect.top 來檢查
      if (showSection2 > section2Rect.top) {
        Section2.style.transform = `translateX(0)`;
      } else {
        Section2.style.transform = `translateX(100%)`;
      }
    });
    //滾動 右邊滑出卡片 YES 完成！！
  }, []);

  return (
    <React.Fragment>
      <div>
        {/* 鼠標 */}
        <div id="follow-icon">
          <img className="ld ld-jump" src="/svg/鼠標1.svg" alt="Follow Icon" />
        </div>
        {/* 鼠標 */}

        {/* goTop */}
        <div className="d-flex justify-content-center">
          <a className="goTop text-center ld ld-breath" href="#">
            GO TOP
            <br />
            <img className="text-center" src="/svg/goTop.svg" alt="" />
          </a>
        </div>
        {/* goTop */}

        {/* 輪播圖 */}
        {/* <div className="">
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
                  data-bs-slide-to={0}
                  className="active"
                />
                <button
                  type="button"
                  data-bs-target="#store-carousel"
                  data-bs-slide-to={1}
                />
                <button
                  type="button"
                  data-bs-target="#store-carousel"
                  data-bs-slide-to={2}
                />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active store-item">
                  <img src="/image/輪播圖1.png" className="d-block store-img img-fluid" />
                </div>
                <div className="carousel-item store-item w-auto text-center">
                  <img src="/image/輪播圖2.png" className="d-block store-img" />
                </div>
                <div className="carousel-item store-item w-auto text-center">
                  <img src="/image/輪播圖3.png" className="d-block store-img" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#store-carousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#store-carousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div> */}
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/image/輪播圖1.png" class="d-block w-100" alt="..." style={{height:"120vh"}}/>
            </div>
            <div class="carousel-item">
              <img src="/image/輪播圖2.png" class="d-block w-100" alt="..." style={{height:"120vh"}}/>
            </div>
            <div class="carousel-item">
              <img src="/image/輪播圖3.png" class="d-block w-100" alt="..." style={{height:"120vh"}}/>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* 輪播圖 */}

        {/* LOGO 測試區 */}
        {/* <div className="logoBox text-center d-flex justify-content-center">
          <img className="myLogo" src="/svg/logoGroup.svg" />
        </div> */}
        {/* LOGO 測試區*/}

        {/* 跑馬字串0 底下那條 */}
        <div className="marquee0-container fixed-bottom">
          <div className="marquee0">
            <p>
              寵樂提供代遛服務、寵物保母、毛孩認養、以及販售寵物相關的商品。
              致力提供您與毛孩最優質的服務，讓毛孩爸媽能放心將毛孩交給我們！
              寵樂提供代遛服務、寵物保母、毛孩認養、以及販售寵物相關的商品。
              致力提供您與毛孩最優質的服務，讓毛孩爸媽能放心將毛孩交給我們！
              寵樂提供代遛服務、寵物保母、毛孩認養、以及販售寵物相關的商品。
              致力提供您與毛孩最優質的服務，讓毛孩爸媽能放心將毛孩交給我們！
              寵樂提供代遛服務、寵物保母、毛孩認養、以及販售寵物相關的商品。
              致力提供您與毛孩最優質的服務，讓毛孩爸媽能放心將毛孩交給我們！
              寵樂提供代遛服務、寵物保母、毛孩認養、以及販售寵物相關的商品。
              致力提供您與毛孩最優質的服務，讓毛孩爸媽能放心將毛孩交給我們！
            </p>
          </div>
        </div>
        {/* 跑馬字串0  底下那條*/}

        {/* 插圖動畫 */}
        <div className="cutePic">
          <div className="cutePic1 x2 ld ld-wander-v sticky-top">
            <img src="/svg/看書.svg" alt="" />
          </div>
          <div className="cutePic2 ld ld-rubber-h">
            <img src="/svg/快樂插圖.svg" alt="" />
          </div>
        </div>
        {/* 插圖動畫 */}

        <hr color="#ff6144" noshade="noshade" />
        {/* 跑馬字串1 大的最上面那條*/}
        <div className="marquee1-container my-5">
          <div className="marquee1">
            <p>
              We love your pets!! We love your pets!! We love your pets!! We
              love your pets!! We love your pets!! We love your pets!! We love
              your pets!! We love your pets!! We love your pets!! We love your
              pets!! We love your pets!! We love your pets!! We love your pets!!
              We love your pets!! We love your pets!! We love your pets!! We
              love your pets!! We love your pets!! We love your pets!! We love
              your pets!! We love your pets!! We love your pets!! We love your
              pets!! We love your pets!! We love your pets!! We love your pets!!
              We love your pets!! We love your pets!! We love your pets!! We
              love your pets!! We love your pets!! We love your pets!! We love
              your pets!! We love your pets!! We love your pets!! We love your
              pets!!
            </p>
          </div>
        </div>
        {/* 跑馬字串1 大的最上面那條*/}

        {/* 服務項目 */}
        <div className="section showSection1">
          <div className="d-flex justify-content-center">
            <p className="title ld ld-jump user-select-none">服務項目</p>
            {/* <img class="ms-5" src="../img/小狗插圖.png" width="80px" /> */}
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            {/* 服務項目1 */}
            <a href="/walking" className="mx-3 serveBox d-flex flex-wrap justify-content-center align-items-center text-decoration-none text-dark">
              <img src="https://media.istockphoto.com/id/1717007444/photo/beautiful-woman-dog-walker-with-three-dogs-in-the-public-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=u3eaKRyoF3BtwNkAmVubULNLkZKcUkRf4hEBj5q5XzY=" />
              <p className="fs-4 fw-bold">代遛服務</p>
            </a>
            {/* 服務項目1 */}
            {/* 服務項目2 */}
            <a href="/nanny" className="mx-3 serveBox d-flex flex-wrap justify-content-center align-items-center text-decoration-none text-dark">
              <img src="https://media.istockphoto.com/id/1205255316/photo/pet-daycare.webp?a=1&b=1&s=612x612&w=0&k=20&c=dUOF8gReaGDjCvgxuyCACi2LU875QsggR640VMBo0dg=" />
              <p className="fs-4 fw-bold">毛孩保母</p>
            </a>
            {/* 服務項目2 */}
            {/* 服務項目3 */}
            <a href="/adopt" className="mx-3 serveBox d-flex flex-wrap justify-content-center align-items-center text-decoration-none text-dark">
              <img src="https://media.istockphoto.com/id/1307238003/photo/life-is-good-with-a-faithful-friend-by-your-side.webp?a=1&b=1&s=612x612&w=0&k=20&c=nUAq6NQlu16-xaBJxua1JhjxtpmxBk2EUUSVAXakgQU=" />
              <p className="fs-4 fw-bold">毛孩領養</p>
            </a>
            {/* 服務項目3 */}
            {/* 服務項目4 */}
            <a href="/shop" className="mx-3 serveBox d-flex flex-wrap justify-content-center align-items-center text-decoration-none text-dark">
              <img src="https://images.unsplash.com/photo-1695169954725-fa757fd7315c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" />
              <p className="fs-4 fw-bold">添購商品</p>
            </a>
            {/* 服務項目4 */}
          </div>
        </div>
        {/* 服務項目 */}

        {/* 跑馬字串2 */}
        <div className="marquee2-container">
          <div className="marquee2">
            <p>
              We really really love your pets!!!We really really love your
              pets!!! We really really love your pets!!!We really really love
              your pets!!! We really really love your pets!!!We really really
              love your pets!!! We really really love your pets!!!We really
              really love your pets!!! We really really love your pets!!!We
              really really love your pets!!! We really really love your
              pets!!!We really really love your pets!!!
            </p>
          </div>
        </div>
        {/* 跑馬字串2 */}

        {/* 下面全部 */}
        <div className="DownAll">
          {/* 流程說明 */}
          <div className="section showSection2">
            <div className="d-flex justify-content-center" id="step">
              <p className="title ld ld-jump user-select-none">流程說明</p>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
              {/* 流程步驟1 */}
              <div className="mx-3 stepBox d-flex flex-wrap justify-content-center align-items-center">
                <img src="https://media.istockphoto.com/id/1388719795/photo/asian-women-viewing-real-estate-websites-on-a-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=8VaDYrMJL6LCjSEgZEU6LwkTrY0Wq8RJ76phq68l9zc=" />
                {/* <img
                src="https://images.unsplash.com/photo-1582457380669-c833e7c77e01?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              /> */}
                <div className="d-flex m-1">
                  <i className="mt-1 bi bi-1-circle-fill" />
                  <p className="mt-3 fs-4 user-select-none">搜尋合適保姆</p>
                </div>
                <div className="m-1 user-select-none">
                  <p>尋找適合保母或遛狗者</p>
                </div>
              </div>
              {/* 流程步驟1 */}
              {/* 流程步驟2 */}
              <div className="mx-3 stepBox d-flex flex-wrap justify-content-center align-items-center">
                <img src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <div className="d-flex m-1">
                  <i className="mt-1 bi bi-2-circle-fill" />
                  <p className="mt-3 fs-4 user-select-none">發出請求</p>
                </div>
                <div className="m-1 user-select-none">
                  <p>向合適保姆或遛狗者發出請求及聯繫</p>
                </div>
              </div>
              {/* 流程步驟2 */}
              {/* 流程步驟3 */}
              <div className="mx-3 stepBox d-flex flex-wrap justify-content-center align-items-center">
                <img src="https://media.istockphoto.com/id/459429875/photo/business-colleagues-discussing.jpg?s=612x612&w=0&k=20&c=jtHwLuYYzdg9TtMOyRbDGjJy6qCuZJUdXrRde5Zfr8M=" />
                <div className="d-flex m-1">
                  <i className="mt-1 bi bi-3-circle-fill" />
                  <p className="mt-3 fs-4 user-select-none">付款及會面</p>
                </div>
                <div className="m-1 user-select-none">
                  <p>線上付款後，即可安排會面</p>
                </div>
              </div>
              {/* 流程步驟3 */}
              {/* 流程步驟4 */}
              <div className="mx-3 stepBox d-flex flex-wrap justify-content-center align-items-center">
                <img src="https://media.istockphoto.com/id/1198100351/photo/portrait-of-beautiful-and-fluffy-tri-colored-tabby-cat-at-home-natural-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=sLI0fE7hD16q5k8YVhnGKQiV6LXoA9SzksZNbftX1b4=" />
                <div className="d-flex m-1">
                  <i className="mt-1 bi bi-4-circle-fill" />
                  <p className="mt-3 fs-4 user-select-none">確認合適度</p>
                </div>
                <div className="m-1 user-select-none">
                  <p>在開始服務後，若發現保母不合適，可進行更換</p>
                </div>
              </div>
              {/* 流程步驟4 */}
            </div>
          </div>
          {/* 流程說明 */}

          {/* 加入我們 */}
          <div className="section joinUs d-flex justify-content-center align-items-center">
            <div>
              <img
                className="leftPic"
                src="https://plus.unsplash.com/premium_photo-1661896746165-b95b72a6e9e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
            <div className="joinContext">
              <div className="d-flex flex-nowrap align-items-center">
                <p className="title ld ld-jump">開放加入</p>
                <img className="ld ld-bounce" src="/svg/join.svg" />
              </div>
              <h6>歡迎有興趣的夥伴加入，成為寵物保母或代遛幫手</h6>
              <button className="me-5 fs-4 fw-bold">成為寵物保母</button>
              <button className="me-5 fs-4 fw-bold">成為代遛幫手</button>
            </div>
          </div>
          {/* 加入我們 */}
          {/* 關於我們 */}
          <div className="section w-100">
            {/* 圖片跑馬 */}
            <div className="marquee3-container w-auto">
              <div className="marquee3 d-flex justify-content-center w-100">
                <p>
                  <img src="https://images.unsplash.com/photo-1503777119540-ce54b422baff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhdHxlbnwwfHwwfHx8MA%3D%3D" />
                  <img src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBldHN8ZW58MHx8MHx8fDA%3D" />
                  <img src="https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D" />
                  <img src="https://images.unsplash.com/photo-1519612535780-b5d7d96c36f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHN8ZW58MHx8MHx8fDA%3D" />
                  <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHx8MA%3D%3D" />
                  <img src="https://images.unsplash.com/photo-1559190394-df5a28aab5c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D" />
                  <img src="https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D" />
                  <img src="https://images.unsplash.com/photo-1509205477838-a534e43a849f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxkb2d8ZW58MHx8MHx8fDA%3D" />
                </p>
              </div>
            </div>
            {/* 圖片跑馬 */}
          </div>
          {/* 關於我們 */}
        </div>
      </div>
    </React.Fragment>
  );
}
export default HomeMain;
