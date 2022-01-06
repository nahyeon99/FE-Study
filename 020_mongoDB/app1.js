const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/db_name");

//db 연결 확인
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("db connection");
});

app.listen(8080, () => {
  console.log("server start");
});
