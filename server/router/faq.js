var express = require("express");
var db = require("../db.js");
var router = express.Router();

router.post("/form", function (req, res) {
  console.log(req.body);
  let sql = `insert into faq_form(user_applicationTime,user_name,user_phone,user_email,user_remark) values (?,?,?,?,?)`;
  let data = [
    req.body.user_applicationTime,
    req.body.user_name,
    req.body.user_phone,
    req.body.user_email,
    req.body.user_remark,
  ];
  db.exc(sql, data, function (results, fields) {
    res.send("success");
  });
});

module.exports = router;
