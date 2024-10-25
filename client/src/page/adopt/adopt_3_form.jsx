import React, { Component } from "react";
import "../../style/adopt_3_form.css";

// class AdoptForm extends Component {
//   state = {};

//   render() {
//     return (
//       <React.Fragment>
//         <a href="" className="backPage">
//           <img src="./img/arrow.png" className="mx-5" alt="回上一頁"></img>
//         </a>
//         <div className="flexCenter">
//           <p className="fs-2 fw-bold">請填寫詳細資料</p>
//           <div className="infoForm">
//             <form action="">
//               <div className="formItem">
//                 <p>申請日期</p>
//                 <select name="" id="">
//                   <option value="">2024/11/01</option>
//                 </select>
//               </div>
//               <div className="formItem">
//                 <p>姓名</p>
//                 <input type="text"></input>
//               </div>
//               <div className="formItem">
//                 <p>身分證字號</p>
//                 <input type="text"></input>
//               </div>
//               <div className="formItem">
//                 <p>年齡</p>
//                 <input type="text"></input>
//               </div>
//               <div className="formItem">
//                 <p>連絡電話</p>
//                 <input type="text"></input>
//               </div>
//               <div className="formItem">
//                 <p>電子信箱</p>
//                 <input type="email"></input>
//               </div>
//             </form>
//           </div>
//           <div className="checkBoxForm">
//             <div className="yesNo">
//               <p>是</p>
//               <p>否</p>
//             </div>
//             <div className="checkItem">
//               <input type="checkbox"></input>
//               <input type="checkbox"></input>
//               <p className="fs-6 mt-3">
//                 您是否知道犬貓的健康有許多不確定的風險?
//               </p>
//             </div>
//             <div className="checkItem">
//               <input type="checkbox"></input>
//               <input type="checkbox"></input>
//               <p className="fs-6 mt-3">
//                 您是否了解當牠生病時立即就醫治療是飼主的責任?
//               </p>
//             </div>
//             <div className="checkItem">
//               <input type="checkbox"></input>
//               <input type="checkbox"></input>
//               <p className="fs-6 mt-3">
//                 您是否了解: 給犬貓良好的教育，是飼主應該努力學習的責任?
//               </p>
//             </div>
//             <div className="checkItem">
//               <input type="checkbox"></input>
//               <input type="checkbox"></input>
//               <p className="fs-6 mt-3">
//                 您是否了解犬貓剛到新環境時，許多潛在的疾病會因1.運輸過程吹風淋雨
//                 2.洗澡 3.過度玩耍 4.更換食物等等讓降低抵抗力而爆發疾病
//               </p>
//             </div>
//             <div className="checkItem">
//               <input type="checkbox"></input>
//               <input type="checkbox"></input>
//               <p className="fs-6 mt-3">
//                 您是否了解飼主在犬貓適應期間扮演著極度重要的角色?(註:運輸使用運輸籠，14天後再洗澡，以乾飼料為主食可幫助犬貓度過適應期)
//               </p>
//             </div>
//             <div className="checkItem">
//               <input type="checkbox"></input>
//               <input type="checkbox"></input>
//               <p className="fs-6 mt-3">
//                 您是否了解就外觀判斷犬貓健康是不夠的，必須到動物醫院為牠做基本的檢查
//               </p>
//             </div>
//             <div className="checkItem">
//               <input type="checkbox"></input>
//               <input type="checkbox"></input>
//               <p className="fs-6 mt-3">
//                 依照動物保護法，犬隻出入公共場所都要有飼主陪同，任意縱放犬貓在外遊蕩將會受罰您是否了解若縱放犬貓在外，任何人都可以加以協送保護送交收容所。
//               </p>
//             </div>
//             <div className="checkItem">
//               <input type="checkbox"></input>
//               <input type="checkbox"></input>
//               <p className="fs-6 mt-3">
//                 犬貓將近有15年的壽命，您是否了解無論人事物的演變(例如:搬家出國
//                 當兵)都不足以構成棄養的原因!
//               </p>
//             </div>
//           </div>
//           <button className="submitButton">送出表單</button>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

function AdoptForm() {
  
  return (
    <React.Fragment>
      <a href="" className="backPage">
        <img src="./img/arrow.png" className="mx-5" alt="回上一頁"></img>
      </a>
      <div className="flexCenter">
        <p className="fs-2 fw-bold">請填寫詳細資料</p>
        <div className="infoForm">
          <form action="">
            <div className="formItem">
              <p>申請日期</p>
              <select name="" id="">
                <option value="">2024/11/01</option>
              </select>
            </div>
            <div className="formItem">
              <p>姓名</p>
              <input type="text"></input>
            </div>
            <div className="formItem">
              <p>身分證字號</p>
              <input type="text"></input>
            </div>
            <div className="formItem">
              <p>年齡</p>
              <input type="text"></input>
            </div>
            <div className="formItem">
              <p>連絡電話</p>
              <input type="text"></input>
            </div>
            <div className="formItem">
              <p>電子信箱</p>
              <input type="email"></input>
            </div>
          </form>
        </div>
        <div className="checkBoxForm">
          <div className="yesNo">
            <p>是</p>
            <p>否</p>
          </div>
          <div className="checkItem">
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <p className="fs-6 mt-3">您是否知道犬貓的健康有許多不確定的風險?</p>
          </div>
          <div className="checkItem">
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <p className="fs-6 mt-3">
              您是否了解當牠生病時立即就醫治療是飼主的責任?
            </p>
          </div>
          <div className="checkItem">
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <p className="fs-6 mt-3">
              您是否了解: 給犬貓良好的教育，是飼主應該努力學習的責任?
            </p>
          </div>
          <div className="checkItem">
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <p className="fs-6 mt-3">
              您是否了解犬貓剛到新環境時，許多潛在的疾病會因1.運輸過程吹風淋雨
              2.洗澡 3.過度玩耍 4.更換食物等等讓降低抵抗力而爆發疾病
            </p>
          </div>
          <div className="checkItem">
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <p className="fs-6 mt-3">
              您是否了解飼主在犬貓適應期間扮演著極度重要的角色?(註:運輸使用運輸籠，14天後再洗澡，以乾飼料為主食可幫助犬貓度過適應期)
            </p>
          </div>
          <div className="checkItem">
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <p className="fs-6 mt-3">
              您是否了解就外觀判斷犬貓健康是不夠的，必須到動物醫院為牠做基本的檢查
            </p>
          </div>
          <div className="checkItem">
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <p className="fs-6 mt-3">
              依照動物保護法，犬隻出入公共場所都要有飼主陪同，任意縱放犬貓在外遊蕩將會受罰您是否了解若縱放犬貓在外，任何人都可以加以協送保護送交收容所。
            </p>
          </div>
          <div className="checkItem">
            <input type="checkbox"></input>
            <input type="checkbox"></input>
            <p className="fs-6 mt-3">
              犬貓將近有15年的壽命，您是否了解無論人事物的演變(例如:搬家出國
              當兵)都不足以構成棄養的原因!
            </p>
          </div>
        </div>
        <button className="submitButton">送出表單</button>
      </div>
    </React.Fragment>
  );
}

export default AdoptForm;
