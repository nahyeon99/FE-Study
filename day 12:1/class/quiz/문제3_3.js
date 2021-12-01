let s = "hello world";
console.log(s[10] + s[9] + s[8] + s[7] + s[6]); //...

let temp = "";
for (let i = s.length - 1; i >= 0; i--) {
  // console.log(s[i]);
  temp += s[i];
}

let temp = "";
for (let i = 0; i < s.length; i++) {
  temp = s[i] + temp;
}
