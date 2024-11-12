var mysql = require("mysql");
const { use } = require("./router/faq");

exports.exc = (sql, data, callback) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database:'petlove',
    multipleStatements: true,
  });

  connection.connect(function (err) {
    if (err) {
      console.log("連線資料庫失敗");
    } else {
      console.log("連線資料庫成功");
    }
  });

  connection.query(sql, data, function (error, results, fields) {
    if (error) {
      console.log(error);
    }
    callback(results, fields);
  });

  connection.end();
};
