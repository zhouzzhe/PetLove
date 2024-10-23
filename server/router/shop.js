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
  let sql = `
    SELECT p.product_id, p.category, p.product_name, p.product_img,
    GROUP_CONCAT( CONCAT(
    '{"spec": "', s.specifications, '", ',
    '"taste": "', s.taste, '", ','
    "price": "', s.price, '"}' )
    SEPARATOR ', ' )
    AS specifications FROM product p
    JOIN product_spec s ON p.product_id = s.product_id
    WHERE p.product_id = ?
    GROUP BY p.product_id;
`;
  db.exc(sql, [req.params.id], function (results, fields) {
    // res.send(JSON.stringify(row[0]));
    res.send(results[0]);
  });
});

router.post("/addToCart", function (req, res) {
  let sql = `
    INSERT INTO cart(productId,productSpec,quantity,totalPrice,total) VALUES(?,?,?,?,?)
  `;
  db.exc(
    sql,
    [
      req.body.productId,
      req.body.productSpec,
      req.body.quantity,
      req.body.totalPrice,
      req.body.total,
    ],
    function (results, fields) {
      if (results) {
        console.log(req.body);
        res.send(JSON.stringify(req.body));
      }
      console.log(fields);
    }
  );
});

module.exports = router;
