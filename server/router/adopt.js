var express = require("express");
var db = require("../db.js");
var router = express.Router();

router.get('/', function (req,res) {
  res.redirect("/adopt/page=1")
})

router.get("/page=:page([0-9]+)", function (req, res) {
  // console.log(req.params.page);
  var page = req.params.page;
  if (page <= 0) {
    res.redirect("/adopt/page=1");
    return;
  }

  var nums_per_page = 9;
  var offset = (page - 1) * nums_per_page;
  let sql = `
  select list_id,album_file,animal_kind,animal_sex,animal_color,animal_variety
  from adopt_list
  limit ?
  offset ?
  `;

  db.exc(sql, [nums_per_page, offset], function (results, fields) {
    let sql2 = `SELECT COUNT(*) AS COUNT FROM adopt_list`;
    db.exc(sql2, [], function (nums, fields) {
      var last_page = Math.ceil(nums[0].COUNT / nums_per_page);
      // console.log(nums[0].COUNT);
      if (page > last_page) {
        res.redirect("/" + last_page);
        return;
      } else {
        // console.log(results);
        res.send([results,nums[0].COUNT]);
      }
    });
  });
});

router.get("/info/item=:item([0-9]+)", function (req, res) {
  let sql = `select * from adopt_list where list_id = ?`;
  // console.log(req.params.item);
  const item = req.params.item
  db.exc(sql, [item], function (results,fields) {
    res.send(results[0]);
  })
})


module.exports = router;
