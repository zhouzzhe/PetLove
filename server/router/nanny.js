var express = require("express");
var db = require("../db.js");
var router = express.Router();

router.get("/", function (req, res) {
  let sql = `select * from nanny_joins_us`;
  db.exc(sql, [], function (results, fields) {
    // console.log(results);
    res.send(results);
  });
});

router.get("/id=:id([0-9]+)", function (req, res) {
  // console.log(req.params.id);
  let sql = `select * from nanny_joins_us where user_id=?`;
  db.exc(sql, [req.params.id], function (results, fields) {
    // console.log(results);
    res.send(results[0]);
  });
});

router.post("/id=:id([0-9]+)/form", function (req, res) {
  console.log(req.body);
  let sql = `insert into nanny_form(nanny_id,pet_type,appointment_start_time,appointment_end_time,client_phone,client_address,client_remark) values (?,?,?,?,?,?,?)`;
  let data = [
    req.body.nanny_id,
    req.body.pet_type,
    1,
    1,
    req.body.client_phone,
    req.body.client_address,
    req.body.client_remark,
  ];

  db.exc(sql, data, function (results, fields) {
    // console.log(results);
    res.send("success");
  });
});

module.exports = router;
