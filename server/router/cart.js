var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("cart home page");
});

module.exports = router;
