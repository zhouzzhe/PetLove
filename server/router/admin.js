let express = require('express');
var db = require('../db')
const multer = require('multer');
var router = express.Router();

// router.use(express.static(__dirname + '/media'))
// router.use(express.static(__dirname + '/public'))

router.get('/index', function (req, res) {
    res.render('index.ejs')
})
router.get('/manage', function (req, res) {
    res.render('manage.ejs')
})
router.get('/navbar', function (req, res) {
    res.render('navbar.ejs')
})
router.get('/footer', function (req, res) {
    res.render("footer.ejs")
})
//上傳產品圖片
let productImg = multer.diskStorage({
    destination: function (req, file, cb) {
        //設定圖片上傳資料夾
        cb(null, 'public/image')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
        console.log(file.originalname);
    }
})

var upload = multer({ storage: productImg })




//客戶資料取得
router.get('/userTable', function (req, res) {
    let userLoginsql = `SELECT * FROM user_login`
    db.exc(userLoginsql, function (err, results) {
        if (err) {
            console.log(err.sqlMessage);
        } else {
            let data = results;
            res.render('userTable.ejs', { data: data })
        }
    })
})
//新增客戶資料
router.post('/addUserData', function (req, res) {
    var body = req.body
    let addUserSql = `
    INSERT INTO user_login (user_name,user_phone,user_mail,user_password)
VALUES (?,?,?,?)
`
    db.exc(addUserSql, [body.userName, body.userPhone, body.userMail, body.userPassword], function (err, results) {
        if (err) {
            console.log('資料寫入失敗' + err);

        } else {
            res.send(results)
        }
    })

})

//取得客戶資料
router.get('/userLogin', function (req, res) {
    let userLoginsql = `SELECT * FROM user_login`
    db.exc(userLoginsql, function (err, results) {
        if (err) {
            console.log(err.sqlMessage);
        } else {
            res.send(results)
        }
    })
})


//取得客戶資料ID
router.get('/getUserData/:id([0-9]+)', function (req, res) {
    var getUserDatasql = `SELECT * FROM user_login WHERE user_id = ?;`
    db.exc(getUserDatasql, [req.params.id], function (results, fields) {
        if (results) {
            res.send(JSON.stringify(results[0]))
            // console.log(JSON.stringify(results[0]));
        }
    })
})
//編輯客戶資料
router.post('/editUserData', function (req, res) {
    var editUserData = `UPDATE user_login SET user_name = ? , user_phone=? ,user_mail = ?, user_password = ? WHERE user_id = ?`
    var editData = [req.body.edituserName, req.body.edituserPhone, req.body.edituserMail, req.body.edituserPassword, req.body.edituserId]
    db.exc(editUserData, editData, function (results, fields) {
    })
})

//刪除客戶資料
router.post('/deleteUserData', function (req, res) {
    var deleteUserData = `DELETE FROM user_login WHERE user_id = ? `
    db.exc(deleteUserData, [req.body.id], function (results, fields) {
    })
})

//訂單資訊頁面
router.get('/orderTable', function (req, res) {
    let userTablesql = `SELECT * FROM orders JOIN orderdetail ON orders.order_id = orderdetail.order_id;`
    db.exc(userTablesql, function (err, results) {
        if (err) {
            console.log(err.sqlMessage);
        } else {
            let data = results;
            res.render('orderTable.ejs', { data: data })
            // console.log(data);

        }
    })
})

//產品資訊頁面
router.get('/productTable', function (req, res) {
    let sql = `
SELECT
    p.product_id,
    p.category,
    p.product_name,
    p.product_img,
    p.product_stock,
    p.introduction,
    s.spec_id,
    s.taste,
    s.specifications,
    s.price

FROM
    product p
JOIN
    product_spec s ON p.product_id = s.product_id
    order by product_id desc
`
    db.exc(sql, function (err, results) {
        if (err) {
            console.log(err.sqlMessage);
        } else {
            let data = results;
            res.render('productTable.ejs', { data: data })

        }
    })
})

//取得產品資料ID
router.get('/getProductData/:id([0-9]+)', function (req, res) {
    let sql = `
    SELECT
    p.product_id,
    p.category,
    p.product_name,
    p.product_img,
    p.product_stock,
    p.introduction,
    s.spec_id,
    s.taste,
    s.specifications,
    s.price
FROM
    product p
JOIN
    product_spec s ON p.product_id = s.product_id
WHERE s.spec_id=?
`
    db.exc(sql, [req.params.id], function (results, fields) {
        if (results) {
            res.send(JSON.stringify(results[0]))
        }
    })
})
//編輯產品資料
router.post('/editProductData', function (req, res) {
    let editProdcutData = `
    UPDATE product SET product_name = ? ,introduction = ? WHERE product_id = ?;
    UPDATE product_spec SET specifications = ? , taste=? ,price = ?  WHERE spec_id = ?
    `
    var editData = [
        req.body.editProductName, req.body.editIntroduction, req.body.editProductId,
        req.body.editSpec, req.body.editTaste, req.body.editPrice, req.body.editSpecId]
    db.exc(editProdcutData, editData, function (results, fields) {
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
    let ordersql = `INSERT INTO orders(user_id,total_price,freight) VALUES(?,?,?)`
    db.exc(ordersql, [req.body.user_id, req.body.total_price, req.body.freight],
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



//上架商品
router.post('/addProduct', upload.single('productImg'), function (req, res) {
    let produtctsql = `INSERT INTO product(category,product_name,product_img,introduction,product_stock) VALUES(?,?,?,?,?)`;
    //設定回傳的照片，若無回傳NULL
    let productImg = req.file ? req.file.filename : null;
    console.log(productImg);

    db.exc(produtctsql, [req.body.productType, req.body.productName, productImg, req.body.introduction, req.body.stock], function (result, fields) {
        const prodtctId = result.insertId;
        let Sepcsql = `INSERT INTO product_spec(product_id,specifications,taste,price)VALUES(?,?,?,?)`;
        db.exc(Sepcsql, [prodtctId, req.body.productSpec, req.body.productTaste, req.body.price], function (results, fields) {
            if (results) {
                res.json({ success: true, message: '產品新增成功', data: results })
            }
        })
    })

})

module.exports = router;