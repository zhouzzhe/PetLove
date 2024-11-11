// var express = require("express");
// var db = require("../db.js");
// var router = express.Router();

// router.get("/", function (req, res) {
//   let sql = `
//   SELECT
//     p.product_id,
//     p.category,
//     p.product_name,
//     p.product_img,
//     GROUP_CONCAT(
//         CONCAT(
//             '{"spec_id": "', s.spec_id, '", ',
//             '"specifications": "', s.specifications, '", ',
//             '"taste": "', s.taste, '", ',
//             '"price": "', s.price, '"}'
//         ) SEPARATOR ', '
//     ) AS specifications
// FROM
//     product p
// JOIN
//     product_spec s ON p.product_id = s.product_id
// GROUP BY
//     p.product_id;

// `;
//   db.exc(sql, [], function (results, fields) {
//     if (results) {
//       res.send(results);
//       // res.render("shop.ejs", { data: results });
//     } else {
//       res.send("庫存讀取失敗");
//     }
//   });
// });

// router.get("/products/:id", function (req, res) {
//   let sql = `
//     SELECT
//       p.product_id,
//       p.category,
//       p.product_name,
//       p.product_img,
//     GROUP_CONCAT(
//       CONCAT(
//         '{"spec": "', s.specifications, '", ',
//         '"taste": "', s.taste, '", ','
//         "price": "', s.price, '"}'
//         ) SEPARATOR ', ' )
//     AS specifications
//     FROM
//       product p
//     JOIN
//       product_spec s ON p.product_id = s.product_id
//     WHERE
//       p.product_id = ?
//     GROUP BY
//       p.product_id;
//   `;
//   db.exc(sql, [req.params.id], function (results, fields) {
//     // res.send(JSON.stringify(row[0]));
//     res.send(results[0]);
//   });
// });

// router.get("/orderData", function (req, res) {
//   let sql = `select * from orders`;
//   db.exc(sql, [], function (results, fields) {
//     if (results) {
//       res.send(results);
//     } else {
//       console.log(fields);
//     }
//   });
// });

// router.post("/addOrders", express.json(), function (req, res) {
//   let sql = `insert into orders(user_id,total_price) values(?,?)`;
//   db.exc(
//     sql,
//     [req.body.user_id, req.body.total_price],
//     function (results, fields) {
//       if (results) {
//         res.send(results);
//       } else {
//         console.log(fields);
//       }
//     }
//   );
// });

// router.post("/addToCart", function (req, res) {
//   let sql = `
//     INSERT INTO cart(productId,productSpec,quantity,totalPrice,total) VALUES(?,?,?,?,?)
//   `;
//   db.exc(
//     sql,
//     [
//       req.body.productId,
//       req.body.productSpec,
//       req.body.quantity,
//       req.body.totalPrice,
//       req.body.total,
//     ],
//     function (results, fields) {
//       if (results) {
//         console.log(req.body);
//         res.send(JSON.stringify(req.body));
//       }
//       console.log(fields);
//     }
//   );
// });

// module.exports = router;


let express = require('express');
var db = require('../db')
const multer = require('multer');
var router = express.Router();


router.get('/data', function (req, res) {
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
    p.product_id order BY p.product_id DESC;

`
    db.exc(sql, [], function (results, fields) {
        if (results) {
            res.send(results)
        }
    })
})

//製作商品分頁
router.get('/data/page/:page([0-9]+)', function (req, res) {
    var currentpage = req.params.page;
    if (currentpage <= 0) {
        res.redirect('/data/page/1')
    }
    var num_page = 9;  //每筆資料頁數
    var offest = (currentpage - 1) * num_page; //定義資料偏移量
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
    p.product_id order BY p.product_id DESC
    LIMIT ${offest},${num_page}
`
    db.exc(sql, function (results, fieldss) {
        db.exc('SELECT COUNT(*) AS COUNT FROM product', function (results, num) {
            var lastPage = Math.ceil(num[0].COUNT / num_page)
            if (currentpage > lastPage) {
                res.redirect('/data/page/' + lastPage)
            }
            res.json({
                data: fieldss,
                currentPage: currentpage,
                lastPage: lastPage
            })
        })
    })
})

//產品頁id
router.get('/data/item/:id', function (req, res) {
    let sqlitem = `
    SELECT p.product_id, p.category, p.product_name, p.product_img,p.introduction,
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
    db.exc(sqlitem,
        [req.params.id], function (results, fields) {
            res.send(results[0])
        }
    )
})

//產品分類路由
router.get('/:category/:page([0-9]+)', function (req, res) {
    // let category = req.params.categoryPage;
    var categoryCurrentPage = req.params.page;
    if (categoryCurrentPage <= 0) {
        // res.redirect(`/${category}/1`)
    }
    var categoryNum_page = 9;
    var categoryOffest = (categoryCurrentPage - 1) * categoryNum_page;
    let categorysql = `
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
    WHERE category = ?
GROUP BY
    p.product_id order by p.product_id desc
    LIMIT ${categoryOffest},${categoryNum_page}
    `
    db.exc(categorysql, [req.params.category], function (results, fields) {
        db.exc("SELECT COUNT(*) AS COUNT FROM product WHERE category = ?", [req.params.category], function (result, fields) {
            var categoryLastPage = Math.ceil(result[0].COUNT / categoryNum_page)
            if (categoryCurrentPage > categoryLastPage) {
                res.redirect('/:category/' + categoryLastPage)
            }
            res.json({
                data: results,
                currentPage: categoryCurrentPage,
                lastPage: categoryLastPage
            })
        })

    })
})




//--------------以下待測試(product路由內無法使用)----------------------------
//購物車 取得訂單資料
router.get('/ordersData', function (req, res) {
    let sql = `SELECT * FROM orders`
    db.exc(sql, [], function (results, fields) {
        if (results) {
            res.send(results)
        }
    })
})
//購物車-新增order資料
router.post('/addOrders', express.json(), function (req, res) {
    let ordersql = `INSERT INTO orders(user_id,total_price) VALUES(?,?)`
    db.exc(ordersql, [req.body.user_id, req.body.total_price],
        function (results, fields) {
            if (results) {
                const orderID = results.insertId;
                res.json({ order_id: orderID })
            }
        })
})

//購物車-新增orderdatatl資料
router.post('/addToCart', express.json(), function (req, res) {
    let cartsql = `INSERT INTO orderdetail(order_id,product_id,product_name,product_spec,taste,quantity,price) VALUES(?,?,?,?,?,?,?)`
    db.exc(cartsql, [req.body.order_id, req.body.product_id, req.body.product_name, req.body.product_spec, req.body.taste, req.body.quantity, req.body.price],
        function (results, fields) {
            if (results) {
                res.send(results)
            }
        }
    )

})
//--------------(product路由內無法使用)----------------------------



module.exports = router;

