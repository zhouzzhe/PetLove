import React, { useState } from "react";
import "../../style/adopt_2_info.css";
import axios from "axios";

// class AdoptInfo extends Component {
//   state = {};

//   render() {
//     return (
//       <React.Fragment>
//         <a href="" className="backPage">
//           <img src="./img/arrow.png" className="mx-5" alt="回上一頁"></img>
//         </a>
//         <div className="d-flex col-12">
//           <div className="petPic col-8 ">
//             <img src="./img/南瓜.jpg" alt=""></img>
//           </div>
//           <div>
//             <div className="col-4 mt-5">
//               <p>虎斑</p>
//               <p>男生</p>
//               <p>2個月大</p>
//               <p>已打疫苗</p>
//               <p>已除蟲</p>
//               <p>目前狀況適合領養</p>
//             </div>
//             <div className="willingness">
//               <button>我有意願領養</button>
//             </div>
//           </div>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

function AdoptInfo(prop) {
  const initialData = prop.match.params.item;
  const [data, setData] = useState({ list_id: initialData });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/adopt/info/item=${data.list_id}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <a href="" className="backPage">
        <img src="./img/arrow.png" className="mx-5" alt="回上一頁"></img>
      </a>
      <div className="d-flex col-12 mb-5">
        <div className="petPic col-8 ">
          <img src={data.album_file} alt="123"></img>
        </div>
        <div>
          <div className="col-4 mt-5 w-100">
            <p>品種：{data.animal_variety}</p>
            <p>性別：{(data.animal_sex = "F" ? "母" : "公")}</p>
            <p>毛色：{data.animal_color}</p>
            <p>體型：{data.animal_bodytype}</p>
            <p>所在機構位置：{data.animal_place}</p>
            <p>所在機構電話：{data.shelter_tel}</p>
          </div>
          <div className="willingness">
            <a
              href={`/adopt/form`}
              className="btn"
              onClick={() => console.log(data.list_id)}
              //回傳要領養哪隻的id
            >
              我有意願領養
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AdoptInfo;
