import React, { useEffect } from "react";
import "../../style/loadingPage.css";

function LoadingPage() {
  useEffect(() => {
    // LOGO滾動放大效果
    const myLogo = document.querySelector(".myLogo");
    const myButton = document.getElementById("myButton");

    const newDiv = document.querySelector(".newDiv");
    const newMarquee = document.querySelector(".newMarquee");

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY; // 獲得當前視窗位置
      const scale = 1 + (2 * scrollY) / 500; // 根據滾動計算放大比例
      myLogo.style.transform = `scale(${scale})`; // 放大效果

      // 獲取視窗高度
      const windowHeight = window.innerHeight;
      const noShowLogo = windowHeight * 1; //讓LOGO消失的高度
      const threshold = windowHeight * 6; //讓按鈕出現的高度
      const showImg = windowHeight * 0.9; //讓圖片和文字出現的高度
      const showText = windowHeight * 2; //讓圖片和文字出現的高度

      // 當滾動到達位置時顯示按鈕
      if (scrollY > threshold) {
        myButton.classList.add("show");

        // 按鈕滾動放大效果
        const scale2 = 1 + (1.5 * scrollY) / 700;
        myButton.style.transform = `scale(${scale2})`;

        // 按鈕滾動放大效果
      } else {
        myButton.classList.remove("show");
      }

      // 當滾動到達位置時顯示圖片
      if (scrollY > showImg) {
        newDiv.style.opacity = `1`;
        newDiv.style.transition = ` 0.3s ease-in-out`;
      } else {
        newDiv.style.opacity = `0`;
      }

      // 當滾動到達位置時顯示文字
      if (scrollY > showText) {
        newMarquee.style.opacity = `1`;
        newMarquee.style.transition = ` 0.8s ease-in-out`;
      } else {
        newMarquee.style.opacity = `0`;
      }

      // 當滾動到位置時讓LOGO消失
      if (scrollY > noShowLogo) {
        myLogo.style.opacity = `0`;
        myLogo.style.transition = ` 0.3s ease-out`; // 設定過渡效果
      } else {
        myLogo.style.opacity = `1`;
      }
    });
  });

  return (
    <React.Fragment>
      <div style={{ height: "1000vh" }}>
        <div className="logoBox text-center d-flex justify-content-center">
          <img className="myLogo" src="/svg/logoGroup.svg" />
        </div>
        {/* <div class="cutePic1 x2 ld ld-wander-v sticky-top">
      <img src="../img/看書.svg" alt="" />
    </div> */}
        {/* 跑馬字串1 大的最上面那條*/}
        <div className="marquee1-container">
          <div className="marquee1">
            <p className="newMarquee">
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
              歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！歡迎光臨寵樂！！
            </p>
          </div>
        </div>
        {/* 跑馬字串1 大的最上面那條*/}
        <div className="myBtnDiv">
          <button id="myButton">
            <a href="/home"> 點擊進入首頁 </a>
          </button>
        </div>
        <div className="newDiv mx-auto">
          <img
            className="w-100"
            src="https://images.unsplash.com/photo-1501472193205-56ffb66400f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHBldHN8ZW58MHx8MHx8fDA%3D"
          />
          <div className="newText text-center my-3">
            <h1>代遛服務</h1>
            <h1>寵物保母</h1>
            <h1>毛孩認養</h1>
          </div>
          <img
            className="w-100"
            src="https://images.unsplash.com/photo-1518288774672-b94e808873ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBldHN8ZW58MHx8MHx8fDA%3D"
          />
          <div className="newText text-center my-3">
            <h1>代遛服務</h1>
            <h1>寵物保母</h1>
            <h1>毛孩認養</h1>
          </div>
          <img
            className="w-100"
            src="https://images.unsplash.com/photo-1512723185835-0700e5069a9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fHBldHN8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div className="newText text-center my-3">
            <h1>代遛服務</h1>
            <h1>寵物保母</h1>
            <h1>毛孩認養</h1>
          </div>
          <img
            className="w-100"
            src="https://images.unsplash.com/photo-1582725461742-8ecd962c260d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxwZXRzfGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoadingPage;
