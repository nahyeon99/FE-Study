let s = "hello world";

let temp = "";
for (let i = s.length - 1; i >= 0; i--) {
  temp += s[i];
}
console.log(temp);
