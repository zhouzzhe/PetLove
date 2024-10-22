var express = require("express");
var db = require("../db.js");
var router = express.Router();

router.get("/", function (req, res) {
  let sql = `SELECT * FROM service_provider`;
  db.exc(sql, [], function (results, fields) {
    res.send(results);
  })
});

// router.get("/walking/id=:id([0-9]+)", function (req, res) {
//   let sql = `select * from adopt_list where list_id = ?`;
//   // console.log(req.params.item);
//   const item = req.params.item;
//   db.exc(sql, [item], function (results, fields) {
//     res.send(results[0]);
//   });
// });

module.exports = router;
