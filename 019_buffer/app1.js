const fs = require("fs").promises;

// 고정된 사이즈의 데이터 바이트, hello 한 번 찍어보면 바로 감이 옵니다.
const buffer = Buffer.from("hello world");
console.log(buffer); // 유니코드 형태
console.log(buffer.length);
console.log(buffer[0], buffer[1]); // 아스키코드
console.log(Buffer.concat([buffer, buffer, buffer]).toString());

fs.readFile("./TheGreatGatsby.txt", "utf8")
  .then((data) => {
    console.log(data.length);
    // console.log(data.slice(0, 1000));
    return data.slice(0, 100);
  })
  .then((data) => {
    const buf = Buffer.from(data);
    console.log(buf);
    console.log(buf.length);
    console.log(buf.toString()); //기본값은 utf-8
    // console.log(buf.toJSON());
  });
