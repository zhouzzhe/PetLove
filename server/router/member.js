const express = require("express");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(cookieParser());
router.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // 如果使用 HTTPS，請設置為 true
  })
);
// app.use((req, res, next) => {
//   res.set('Cache-Control','no-store');
//   next();
// })

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// 鑑權中間件
function isAuthenticated(req, res, next) {
  console.log("Session ID:", req.session.userId); // 查看 session ID
  if (req.session.userId) {
    return next();
  }
  console.log("未登錄，重定向到登錄頁面");
  res.redirect("/member/login"); // 未登錄則重定向到登錄頁
}

//獲取用戶資料
const getUserData = (req, res, next) => {
  pool.query(
    "SELECT * FROM userlogin WHERE user_id = ?",
    [req.session.userId],
    (err, results) => {
      if (err) {
        return next(err);
      }
      req.user = results[0];
      next();
    }
  );
};

// 測試用
router.get("/", function (req, res) {
  res.send("member home page");
});

// 定義路由
router.get("/adoption", isAuthenticated, getUserData, (req, res) => {
  res.render("member-adoption", { userlogin: req.user });
});

// 獲取用戶歷史訂單的路由
router.get("/history", isAuthenticated, getUserData, (req, res) => {
  // 查詢訂單
  db.exc(
    "SELECT * FROM orders WHERE user_id = ?",
    [req.session.userId],
    (err, orders) => {
      if (err) {
        console.error("查詢訂單錯誤:", err);
        return res.status(500).send("伺服器錯誤");
      }

      // 查詢訂單明細
      db.exc(
        "SELECT * FROM order_details WHERE order_id IN (SELECT order_id FROM orders WHERE user_id = ?)",
        [req.session.userId],
        (err, orderDetails) => {
          if (err) {
            console.error("查詢訂單明細錯誤:", err);
            return res.status(500).send("伺服器錯誤");
          }

          // 傳遞用戶資料、訂單和訂單明細到模板
          // res.render('member-history', { userlogin: req.user, orders: orders, orderDetails: orderDetails });
        }
      );
    }
  );
});

// router.get('/logistic', isAuthenticated, getUserData, (req, res) => {
//   res.render('member-logistic', { userlogin: req.user });
// });

router.get("/mission", isAuthenticated, getUserData, (req, res) => {
  const userId = req.session.userId;

  db.exc(
    "SELECT * FROM petnanny WHERE user_id = ?",
    [userId],
    (err, petnannyOrders) => {
      if (err) {
        console.error("查詢 petnanny 訂單錯誤:", err);
        return res.status(500).send("伺服器錯誤");
      }

      // 傳遞用戶資料和 petnanny 訂單資料到模板
      // res.render('member-mission', { userlogin: req.user, petnannyOrders: petnannyOrders });
    }
  );
});

router.get("/password", isAuthenticated, getUserData, (req, res) => {
  res.render("member-password", { userlogin: req.user });
});
router.get("/joinus", isAuthenticated, getUserData, (req, res) => {
  res.render("member-joinus", { userlogin: req.user });
});

router.get("/userpage", isAuthenticated, getUserData, (req, res) => {
  res.render("member-userpage", { userlogin: req.user });
});

router.get("/payment", isAuthenticated, getUserData, (req, res) => {
  res.render("member-payment", { userlogin: req.user });
});

router.get("/payment/addCard", isAuthenticated, getUserData, (req, res) => {
  res.render("member-addCard", { userlogin: req.user });
});

router.get("/jobsetting", isAuthenticated, getUserData, (req, res) => {
  res.render("member-jobsetting", { userlogin: req.user });
});

// 查詢 walking 資料
router.get("/request", isAuthenticated, getUserData, (req, res) => {
  db.exc(
    "SELECT * FROM walking WHERE user_id = ?",
    [req.session.userId],
    (err, walkingResults) => {
      if (err) {
        console.error("查詢 walking 資料錯誤:", err);
        return res.status(500).send("伺服器錯誤");
      }

      // 傳遞用戶資料和 walking 資料到模板
      // res.render('member-request', { userlogin: req.user, walking: walkingResults });
    }
  );
});

router.get("/membership", isAuthenticated, (req, res) => {
  // 根據 session 中的 userId 查詢用戶資料
  db.exc(
    "SELECT * FROM userlogin WHERE user_id = ?",
    [req.session.userId],
    (err, results) => {
      if (err) {
        console.error("查詢錯誤:", err);
        return res.status(500).send("伺服器錯誤");
      }

      if (results.length === 0) {
        return res.status(404).send("用戶不存在");
      }

      const user = results[0]; // 取出第一個用戶

      // 傳遞用戶資料到模板
      // res.render('membership', { userlogin: user });
    }
  );
});

// router.get('/payment/paycard', isAuthenticated, getUserData, (req, res) => {
//   res.render('member-paycard', { userlogin: req.user });
// });
// router.get('/request/orderscore', isAuthenticated, getUserData, (req, res) => {
//   res.render('member-orderscore', { userlogin: req.user });
// });
// router.get('/mission/contactGuest', isAuthenticated, (req, res) => {
//   const nanny_order = req.query.nanny_order;
//   res.render('member-contactGuest', { nanny_order: nanny_order });
// });
// router.get('/request/contactNanny', isAuthenticated, (req, res) => {
//   const walking_order = req.query.walking_order; // 獲取 walking_order

//   // 這裡可以將 walking_order 傳遞到模板中
//   res.render('member-contactNanny', { walking_order: walking_order });
// });

// router.get('/mission/completeOrder', isAuthenticated, (req, res) => {
//   res.render('member-CompleteOrder');
// });
// router.get('/payment/creditInfo', isAuthenticated, (req, res) => {
//   res.render('member-creditInfo');
// });
// router.get('/payment/editCard', isAuthenticated, (req, res) => {
//   res.render('member-editCard');
// });
// router.get('/mission/comment', isAuthenticated, (req, res) => {
//   res.render('member-comment');
// });
// router.get('/password/setPassword', isAuthenticated, (req, res) => {
//   res.render('member-setPassword');
// });
// router.get('/login', (req, res) => {
//   res.render('login');
// });
// router.get('/register', (req, res) => {
//   res.render('member-register')
// })

// router.get('/userinfo', isAuthenticated, getUserData, (req, res) => {
//   res.render('member-userinfo', { userlogin: req.user });
// });

router.post("/password", (req, res) => {
  const { password, user_id } = req.body; // 獲取密碼和用戶ID
  let updates = [];
  let params = [];

  if (password) {
    updates.push("user_password = ?"); // 將更新的字段推入數組
    params.push(password);
  }

  // 如果沒有密碼，返回錯誤
  if (updates.length === 0) {
    return res.status(400).json({ message: "請提供新的密碼" });
  }

  params.push(user_id); // 添加用戶ID到參數數組

  // 構建更新查詢
  const sql = `UPDATE userlogin SET ${updates.join(", ")} WHERE user_id = ?`;

  db.exc(sql, params, (error, results) => {
    if (error) {
      console.error("更新密碼錯誤:", error);
      return res.status(500).json({ error: error.message });
    }
    res.json({ message: "密碼更新成功！", results });
  });
});

router.post("/register", (req, res) => {
  const { name, phone, email, password } = req.body;

  // 構建 SQL 查詢
  const sql =
    "INSERT INTO userlogin (user_name, user_phone, user_mail, user_password) VALUES (?, ?, ?, ?)";

  // 使用資料庫連接池插入資料
  db.exc(sql, [name, phone, email, password], (error, results) => {
    if (error) {
      console.error("註冊錯誤:", error);
      return res.status(500).json({ message: "伺服器錯誤" });
    }

    // 註冊成功，重定向到登入頁面
    res.redirect("/login");
  });
});

router.post("/request/contactNanny", isAuthenticated, (req, res) => {
  const { walking_order, walking_req } = req.body; // 獲取 walking_order 和留言
  const user_id = req.session.userId;

  // 更新留言
  const updateQuery = `
      UPDATE walking
      SET walking_req = ?
      WHERE walking_order = ? AND user_id = ?
  `;

  const updateValues = [walking_req, walking_order, user_id];

  db.exc(updateQuery, updateValues, (error, updateResults) => {
    if (error) {
      console.error("更新留言錯誤:", error);
      return res.status(500).send("伺服器錯誤");
    }

    if (updateResults.affectedRows === 0) {
      return res.status(404).send("找不到該訂單");
    }

    res.redirect("/request");
  });
});

router.post("/payment/addCard", (req, res) => {
  const { name, phone, email, user_id, cardNumber } = req.body;
  const sql = `INSERT INTO credit_card (user_id, card_number, card_name, card_phone, card_email)
  VALUES (?, ?, ?, ?, ?)`;

  const data = [user_id, cardNumber, name, phone, email];
  db.exc(sql, data, (error, results) => {
    if (error) {
      console.error("更新錯誤:", error);
      return res.status(500).json({ error: error.message });
    }
    res.json({ message: "資料更新成功！", results });
  });
});

router.post("/mission/contactGuest", isAuthenticated, (req, res) => {
  const { nanny_order, nanny_message } = req.body; // 確保使用正確的變數名稱
  const user_id = req.session.userId;

  const updateQuery = `
      UPDATE petnanny
      SET nanny_message = ?
      WHERE nanny_order = ? AND user_id = ?`;

  const updateValues = [nanny_message, nanny_order, user_id]; // 使用 nanny_message 而不是 nanny_req

  db.exc(updateQuery, updateValues, (error, updateResults) => {
    if (error) {
      console.error("更新留言錯誤:", error);
      return res.status(500).send("伺服器錯誤");
    }
    if (updateResults.affectedRows === 0) {
      return res.status(404).send("找不到訂單");
    }
    res.redirect("/mission");
  });
});

router.post("/jobsetting", isAuthenticated, getUserData, (req, res) => {
  const userId = req.session.userId; // 假設 user_id 存在 session 中
  const introduce = req.body.jobsetting_introduce;
  const acceptedPets = req.body.jobsetting_dogCat || [];
  const availableDays = req.body.jobsetting_week || [];
  const serviceArea = req.body.jobsetting_area;
  const acceptedSizes = req.body.jobsetting_petSize || [];
  const servicePrice = req.body.jobsetting_price;

  // 將陣列轉換為字串
  const dogCatString = acceptedPets.join(", ");
  const weekString = availableDays.join(", ");
  const petSizeString = acceptedSizes.join(", ");

  // 檢查是否已存在該用戶的工作設定
  const sql = `SELECT * FROM jobsetting WHERE user_id = ?`;

  db.exc(sql, [userId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("資料庫錯誤");
    }

    if (results.length > 0) {
      // 已存在，進行更新
      const updateQuery = `
              UPDATE jobsetting
              SET jobsetting_introduce = ?,
                  jobsetting_dogCat = ?,
                  jobsetting_week = ?,
                  jobsetting_area = ?,
                  jobsetting_petSize = ?,
                  jobsetting_price = ?
              WHERE user_id = ?`;

      db.exc(
        sql,
        [
          introduce,
          dogCatString,
          weekString,
          serviceArea,
          petSizeString,
          servicePrice,
          userId,
        ],
        (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).send("資料庫錯誤");
          }
          res.redirect("/membership");
        }
      );
    } else {
      // 不存在，進行插入
      const insertQuery = `
              INSERT INTO jobsetting (user_id, jobsetting_introduce, jobsetting_dogCat, jobsetting_week, jobsetting_area, jobsetting_petSize, jobsetting_price)
              VALUES (?, ?, ?, ?, ?, ?, ?)`;

      db.exc(
        insertQuery,
        [
          userId,
          introduce,
          dogCatString,
          weekString,
          serviceArea,
          petSizeString,
          servicePrice,
        ],
        (err, result) => {
          if (err) {
            console.error(err);
            return res.status(500).send("資料庫錯誤");
          }
          // res.send('工作設定已創建');
          res.redirect("/membership");
        }
      );
    }
  });
});

router.post("/userinfo", (req, res) => {
  const { name, phone, email, user_id } = req.body; // 確保表單中包含user_id

  // 構建更新查詢和參數陣列
  let updates = [];
  let params = [];

  if (name) {
    updates.push("user_name = ?");
    params.push(name);
  }
  if (phone) {
    updates.push("user_phone = ?");
    params.push(phone);
  }
  if (email) {
    updates.push("user_mail = ?");
    params.push(email);
  }

  // 如果沒有需要更新的字段，直接返回
  if (updates.length === 0) {
    return res.status(400).json({ message: "沒有需要更新的資料" });
  }

  // 將user_id加入參數
  params.push(user_id);

  // 構建最終的SQL查詢
  const query = `UPDATE userlogin SET ${updates.join(", ")} WHERE user_id = ?`;

  db.exc(query, params, (error, results) => {
    if (error) {
      console.error("更新錯誤:", error);
      return res.status(500).json({ error: error.message });
    }
    res.json({ message: "資料更新成功！", results });
  });
});

router.post("/login", (req, res) => {
  const { user_mail, user_password } = req.body;

  db.exc(
    "SELECT * FROM userlogin WHERE user_mail = ?",
    [user_mail],
    (err, results) => {
      if (err) {
        console.error("查詢錯誤:", err);
        return res.status(500).send("伺服器錯誤");
      }

      if (results.length === 0) {
        console.log("用戶不存在:", user_mail);
        return res.status(401).send("用戶不存在");
      }

      const user = results[0];

      // 這裡應該使用 bcrypt 來比對密碼
      if (user.user_password !== user_password) {
        console.log("密碼錯誤:", user_mail);
        return res.status(401).send("密碼錯誤");
      }
      console.log("設置 session ID:", req.session.userId);
      res.cookie("username", user.user_mail);
      console.log("設置 cookie:", user.user_mail);
      // 登錄成功，儲存用戶信息到 session
      req.session.userId = user.user_id;
      console.log("登錄成功，Session ID:", req.session.userId);
      res.redirect("/membership");
    }
  );
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("登出錯誤:", err);
      return res.status(500).send("登出失敗");
    }
    res.clearCookie("username"); // 清除 cookie
    res.redirect("/member/login"); // 重定向到登錄頁
  });
});

module.exports = router;
