var express = require("express");
var db = require("../db.js");
var router = express.Router();

router.get("/", function (req, res) {
  let sql = `
  SELECT
    p.product_id,
    p.category,
    p.product_name,
    p.product_img,
    p.product_stock,
    p.introduction,
    GROUP_CONCAT(
        CONCAT(
            '{"spec_id": "', s.spec_id, '", ',
            '"specifications": "', s.specifications, '", ',
            '"taste": "', s.taste, '", ',
            '"price": "', s.price, '"}'
        ) SEPARATOR ', '
    ) AS specifications
FROM
    product p
JOIN
    product_spec s ON p.product_id = s.product_id
GROUP BY
    p.product_id;

`;
  db.exc(sql, [], function (results, fields) {
    if (results) {
      res.send(results);
      // res.render("shop.ejs", { data: results });
    } else {
      res.send("庫存讀取失敗");
    }
  });
});

router.get("/products/:id", function (req, res) {
  let sql = `select * from product where product_id = ?`;
  db.exc(sql, [req.params.id], function (err, row) {
    // res.send(JSON.stringify(row[0]));
    res.send(row[0]);
  });
});

module.exports = router;
