const express = require("express");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const router = express.Router();
const db = require("../db"); // 根據你的檔案結構調整路徑

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

router.get("/api/user/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  let sql = `SELECT * FROM userlogin WHERE user_id = ?`;
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  });
});

router.get("/member", isAuthenticated, (req, res) => {
  const userId = req.session.userId; // 確保使用 session 中的 userId
  console.log("收到的 user_id:", userId); // 輸出收到的 user_id

  db.exc(
    "SELECT user_name FROM userlogin WHERE user_id = ?",
    [userId],
    (err, results) => {
      if (err) {
        console.error("查詢錯誤:", err);
        return res.status(500).send("伺服器錯誤");
      }

      console.log("查詢結果:", results); // 輸出查詢結果
      if (results.length === 0) {
        return res.status(404).send("用戶不存在");
      }

      const user = results[0]; // 取出第一個用戶
      console.log("返回的用戶名:", user.user_name); // 確認返回的用戶名
      return res.json({ userName: user.user_name }); // 返回用戶名
    }
  );
});



// 測試用
router.get("/", function (req, res) {
  res.send("member home page");
});


router.post("/login", (req, res) => {
  const { user_mail, user_password } = req.body;

  const sql = "SELECT * FROM userlogin WHERE user_mail = ?";
  db.exc(sql, [user_mail], (mydata, errORfields) => {
    if (mydata == null) {
      console.log("--------資料庫錯誤:--------", errORfields);
      return res.status(500).json({ message: "內部伺服器錯誤" });
    }

    if (mydata && mydata.length > 0) {
      const user = mydata[0];

      // 直接比較明文密碼
      if (user.user_password === user_password) {
        req.session.userId = user.user_id; // 儲存 user_id 到 session
        res.cookie("username", user.user_mail, { httpOnly: true });
        console.log("這是目前登入的user_id : " + req.session.userId);
        console.log("---------分隔線---------");
        console.log(req.session.userId);
        // console.log(user.user_id);
        // console.log(user.user_mail);
        // 1030 - 加入
        return res.json({ success: true, apple: req.session.userId });
      } else {
        return res.status(401).json({ success: false, message: "無效的憑證" });
      }
    } else {
      return res.status(401).json({ success: false, message: "無效的憑證" });
    }
  });
});

router.get("/check-session", (req, res) => {
  if (req.session.userId) {
    res.json({ loggedIn: true, userId: req.session.userId });
  } else {
    res.json({ loggedIn: false });
  }
});

router.post("/Register", (req, res) => {
  const { name, email, password } = req.body;

  // 構建 SQL 查詢
  const sql =
    "INSERT INTO userlogin (user_name, user_mail, user_password) VALUES ( ?, ?, ?)";

  // 使用資料庫連接池插入資料
  db.exc(sql, [name, email, password], (error, results) => {
    if (error) {
      console.error("註冊錯誤:", error);
      return res.status(500).json({ message: "伺服器錯誤" });
    }

    // 註冊成功，重定向到登入頁面
    res.redirect("/login");
  });
});

router.get("/userpage-userinfo/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  let sql = `SELECT * FROM userlogin WHERE user_id = ?`;
  db.exc(sql, [userId], function (results, field) {
    if (results) {
      res.send(results);
    }
  })
})

router.get("/userpage-jobsetting/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  let sql = `SELECT * FROM jobsetting WHERE user_id = ?`;
  db.exc(sql, [userId], function (results, field) {
    if (results) {
      res.send(results);
    }
  })
})


// 獲取用戶歷史訂單的路由
router.get("/history/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  console.log(userId);

  // 查詢訂單
  let sql = "SELECT * FROM orders WHERE user_id = ?";
  // const userId = req.session.myUserIDDD;
  // console.log(req.session.myUserIDDD);
  // console.log(req.session);
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  });
});

router.get("/historyDetails/:id", (req, res) => {
  let sql = "SELECT * FROM order_details WHERE order_id IN (SELECT order_id FROM orders WHERE user_id = ?)";
  const userId = req.params.id; // 獲取 URL 中的 user_id
  // const userId = req.session.myUserIDDD;
  console.log(userId);
  console.log(req.session.userId);
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      console.log("-----------");
      console.log(results);
      console.log("-----------");
      res.send(results);
    }
  });
});

router.get("/request/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  let sql = "SELECT * FROM walking WHERE user_id = ? AND state = '進行中'";
  // const userId = req.session.myUserIDDD;
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);

router.get("/contact-nanny/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  let sql = "SELECT * FROM walking WHERE user_id = ? AND state = '進行中'";
  // const userId = req.session.myUserIDDD;
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);

router.post("/contact-nanny/update/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  const { walking_req } = req.body;
  let sql = "UPDATE walking SET walking_req = ? WHERE user_id = ? AND state = '進行中'";
  let data = [
    req.body.walking_req
  ]
  db.exc(sql, [walking_req, userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);

router.get("/requestComplete/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  const { walking_req } = req.body;
  let sql = "SELECT * FROM walking WHERE user_id = ? AND state = '已完成'";
  // const userId = req.session.myUserIDDD;
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);

router.get("/mission/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  let sql = "SELECT * FROM petnanny WHERE user_id = ? AND state = '進行中'";
  // const userId = req.session.myUserIDDD;
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);

router.get("/contact-guest/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  let sql = "SELECT * FROM petnanny WHERE user_id = ? AND state = '進行中'";
  // const userId = req.session.myUserIDDD;
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);


router.post("/contact-guest/update/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  const { nanny_message } = req.body;
  let sql = "UPDATE petnanny SET nanny_message = ? WHERE user_id = ? AND state = '進行中'";
  let data = [
    req.body.nanny_message
  ]
  db.exc(sql, [nanny_message, userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);


router.get("/missionComplete/:id", (req, res) => {
  let sql = "SELECT * FROM petnanny WHERE user_id = ? AND state = '已完成'";
  const userId = req.params.id; // 獲取 URL 中的 user_id
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);

router.get("/adoption/:id", (req, res) => {
  let sql = "SELECT * FROM adopt_form WHERE user_id = ?";
  const userId = req.params.id; // 獲取 URL 中的 user_id
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);

router.get("/userinfo/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  let sql = "SELECT * FROM userlogin WHERE user_id = ?";
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);

router.post("/userinfo/update/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  const { user_name, user_phone, user_mail } = req.body; // 从请求体获取新信息

  // 使用 UPDATE 语句更新用户信息
  let sql = "UPDATE userlogin SET user_name = ?, user_phone = ?, user_mail = ? WHERE user_id = ?";
  let data = [
    req.body.user_name,
    req.body.user_phone,
    req.body.user_mail
  ]
  db.exc(sql, [user_name, user_phone, user_mail, userId], function (results, field) {
    if (results) {
      res.send(results);
    }
  });
});

router.get("/jobsetting/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  let sql = "SELECT * FROM jobsetting WHERE user_id = ?";
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);

router.post("/jobsetting/update/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  const { jobsetting_introduce, jobsetting_dogCat, jobsetting_week, jobsetting_area, jobsetting_petSize, jobsetting_price } = req.body; // 从请求体获取新信息

  if (!jobsetting_introduce || !jobsetting_dogCat || !jobsetting_week || !jobsetting_area || !jobsetting_petSize || !jobsetting_price) {
    return res.status(400).json({ message: "缺少必要資料" });
  }
  // 使用 UPDATE 语句更新用户信息
  let sql = "UPDATE jobsetting SET jobsetting_introduce = ?, jobsetting_dogCat = ?, jobsetting_week = ?, jobsetting_area = ?, jobsetting_petSize = ?, jobsetting_price = ? WHERE user_id = ?";
  let data = [
    jobsetting_introduce,
    jobsetting_dogCat,
    jobsetting_week,
    jobsetting_area,
    jobsetting_petSize,
    jobsetting_price,
    userId
  ];
  db.exc(sql, data, function (results, field) {
    if (results) {
      res.send(results);
    }
  });
});

router.post("/password/update/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  const { user_password } = req.body;
  let sql = "UPDATE userlogin SET user_password = ? WHERE user_id = ?";
  let data = [
    req.body.user_password
  ]
  db.exc(sql, [user_password, userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);

router.post("/address/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  const { recipient_address, recipient_phone, recipient_name } = req.body;

  // 在插入 recipient 前先檢查 user_id 是否在 userlogin 表中存在
  let checkUserSql = "SELECT * FROM userlogin WHERE user_id = ?";

  db.exc(checkUserSql, [userId], function (results, fields) {
    if (results.length === 0) {
      // 如果找不到對應的 user_id，返回錯誤
      return res.status(400).json({ error: "無效的 user_id，請先註冊或登入。" });
    }

    // 如果 user_id 存在，則執行插入操作
    let sql = "INSERT INTO recipient (user_id, recipient_address, recipient_phone, recipient_name) VALUES (?, ?, ?, ?)";
    let data = [userId, recipient_address, recipient_phone, recipient_name];

    db.exc(sql, data, function (insertResults, fields) {
      if (insertResults) {
        res.json({ message: "新增地址成功", data: insertResults });
      } else {
        res.status(500).json({ error: "新增地址失敗" });
      }
    });
  });
});

router.get("/userinfo/:id", (req, res) => {
  const userId = req.params.id; // 獲取 URL 中的 user_id
  let sql = "SELECT * FROM userlogin WHERE user_id = ?";
  db.exc(sql, [userId], function (results, filed) {
    if (results) {
      res.send(results);
    }
  })
}
);

router.get("/become-nanny/:id", (req, res) => {
  const userId = req.params.id;
  const sql = "SELECT * FROM become_nanny WHERE user_id = ?";
  db.exc(sql, [userId], (error, results) => {
    if (results) {
      res.send(results);
    }
  });
});

router.post("/become-nanny/update/:id", (req, res) => {
  const userId = req.params.id;
  const {
    Nanny_introduce,
    becomeNanny_dogCat,
    becomeNanny_week,
    service_city,
    becomeNanny_petSize,
    becomeNanny_price
  } = req.body;

  // 使用 UPDATE 語句來更新資料，而不是 INSERT
  const sql = `
    UPDATE become_nanny
    SET
      Nanny_introduce = ?,
      becomeNanny_dogCat = ?,
      becomeNanny_week = ?,
      service_city = ?,
      becomeNanny_petSize = ?,
      becomeNanny_price = ?
    WHERE user_id = ?
  `;

  let data = [
    Nanny_introduce,
    becomeNanny_dogCat,
    becomeNanny_week,
    service_city,
    becomeNanny_petSize,
    becomeNanny_price,
    userId
  ];
  db.exc(sql, data, function (results, field) {
    if (results) {
      res.send(results);
    }
  }
  )
})


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
