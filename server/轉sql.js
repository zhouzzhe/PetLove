const mysql = require("mysql");
const axios = require("axios");
const fs = require("fs");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "petlove",
});

connection.connect();

// 讀取 JSON 檔案
axios
  .get(
    "https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&IsTransData=1"
  )
  .then(function (response) {
    // console.log(response);
    // const jsonData = JSON.parse(response);
    const results = response.data;
    // 解析 JSON 並插入資料庫
    results.forEach((item) => {
      const sql = `INSERT INTO adopt_list (animal_id,animal_place,animal_kind,animal_sex,animal_color,animal_variety,animal_bodytype,animal_status,animal_date,animal_foundplace,shelter_tel,album_file) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`;
      connection.query(
        sql,
        [item.animal_id, item.animal_place, item.animal_kind,item.animal_sex,item.animal_colour,item.animal_Variety,item.animal_bodytype,item.animal_status,item.animal_opendate,item.animal_foundplace,item.shelter_tel,item.album_file],
        (err, res) => {
          if (err) throw err;
          console.log("資料已插入: ", res);
        }
      );
    });
    connection.end();
  })

  .catch(function (error) {
    console.log(error);
  });


// async function getData() {
//   try {
//   const response = axios.get("https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&IsTransData=1")
//   console.log(response);
// }
//   catch(err) {
//     console.log(err);
//   }
// }
