var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {
  res.json({"id": 3, "qty": 200 })
})//測試

module.exports = router;
