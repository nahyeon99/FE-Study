const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  console.log("get으로 요청이 들어왔습니다.");
  //   res.json({ 이름: "호준", 나이: 10 });
  //   res.status(201).send("요청 성공");
  res.status(404).send("요청성공");
});

app.listen(8080);
