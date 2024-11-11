var express = require("express");
var app = express();
var cors = require("cors");
//引用資料庫
var db = require("./db.js");

//引入路由
var index = require("./router/index.js");
var product = require("./router/product.js");
var member = require("./router/member.js");
var adopt = require("./router/adopt.js");
var faq = require("./router/faq.js");
var walking = require("./router/walking.js");
var nanny = require("./router/nanny.js");
var admin = require("./router/admin.js");

app.use(cors());
// 解析json資料
app.use(express.json());

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));
app.use("/media", express.static(__dirname + "/media"));

//註冊路由
app.use("/", index);
app.use("/product", product);
app.use("/member", member);
app.use("/adopt", adopt);
app.use("/faq", faq);
app.use("/walking", walking);
app.use("/nanny", nanny);
app.use("/admin", admin);

app.listen(8000, function () {
  console.log("成功" + new Date().toLocaleTimeString());
  console.log("control+C 可停止伺服器");
  // console.log(__dirname);
});
