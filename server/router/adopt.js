var express = require("express");
var db = require("../db.js");
var router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/adopt/page=1");
});

// router.get("/page=:page([0-9]+)", function (req, res) {
//   // console.log(req.params.page);
//   let page = req.params.page;
//   if (page <= 0) {
//     res.redirect("/adopt/page=1");
//     return;
//   }

//   let nums_per_page = 9;
//   let offset = (page - 1) * nums_per_page;
//   let sql = `
//   select list_id,album_file,animal_kind,animal_sex,animal_color,animal_variety
//   from adopt_list
//   limit ?
//   offset ?
//   `;

//   db.exc(sql, [nums_per_page, offset], function (results, fields) {
//     let sql2 = `SELECT COUNT(*) AS COUNT FROM adopt_list`;
//     db.exc(sql2, [], function (nums, fields) {
//       let last_page = Math.ceil(nums[0].COUNT / nums_per_page);
//       // console.log(nums[0].COUNT);
//       if (page > last_page) {
//         res.redirect("/" + last_page);
//         return;
//       } else {
//         // console.log(results);
//         res.json({
//           data: [results],
//           total: nums[0].COUNT,
//           currentPage: page,
//           lastPage: last_page,
//         });
//       }
//     });
//   });
// });

router.get("/page=:page([0-9]+)", function (req, res) {
  let page = req.params.page;
  if (page <= 0) {
    res.redirect("/adopt/page=1");
    return;
  }
  let nums_per_page = 9;
  let offset = (page - 1) * nums_per_page;

  console.log(req.query);
  const { petType, petSex } = req.query;
  let sql = "select * from adopt_list  where 1=1";
  const params = [];

  if (petType) {
    sql += " and animal_kind = ?";
    params.push(petType);
  }

  if (!petSex || petSex == "不限") {
    sql += " and animal_sex in ('M','F')";
  } else {
    sql += " and animal_sex = ?";
    params.push(petSex);
  }

  sql += ` limit ? offset ?`;
  params.push(nums_per_page, offset);


  db.exc(sql, params, function (results, fields) {
    let sql2 = `select count(*) as count from adopt_list where 1=1`;
    const params2 = [];
    if (petType) {
      sql2 += " and animal_kind = ?";
      params2.push(petType);
    }

    if (!petSex || petSex == "不限") {
      sql2 += " and animal_sex in ('M','F')";
    } else {
      sql2 += " and animal_sex = ?";
      params2.push(petSex);
    }

    db.exc(sql2, params2, function (nums, fields) {
      let last_page = Math.ceil(nums[0].count / nums_per_page);
      if (page > last_page) {
        res.redirect("/" + last_page);
        return;
      } else {
        if (results) {
          res.json({
            data: results,
            total: nums[0].count,
            currentPage: page,
            lastPage: last_page,
          });
        } else {
          console.error("查詢錯誤", fields);
        }
      }
    });
  });
});

router.get("/info/item=:item([0-9]+)", function (req, res) {
  let sql = `select * from adopt_list where list_id = ?`;
  // console.log(req.params.item);
  const item = req.params.item;
  db.exc(sql, [item], function (results, fields) {
    res.send(results[0]);
  });
});

module.exports = router;
