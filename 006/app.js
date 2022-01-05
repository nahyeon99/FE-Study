const fs = require("fs");

// rename, readFile, writeFile, appendFile, copyFile, mkdir

// 1
let 변수 = "김나현"; // 사용자이름
let 날짜 = new Date();
fs.rename("./test.txt", `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
  console.log(err);
});

// 2.
fs.readFile("./test.txt", "utf8", (err, data) => {
  console.log(err);
  console.log(data);
});

// 3
fs.readdir("./", (err, data) => {
  console.log(err);
  console.log(data);
});
