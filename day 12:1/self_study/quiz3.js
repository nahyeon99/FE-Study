// ans 1

let arr = [11, 22, 33, 111, 2];
let sum = arr.join("");
console.log(sum);
let result = 0;
for (let n of sum) {
  result += parseInt(n, 10);
  console.log(n);
}
console.log(result);

// ans 2(class)
let result = 0;
for (let i of 912391239 + "") {
  result += parseInt(i);
}
console.log(result);

// ans 3(class)
let arr = [11, 22, 33, 111, 2];
let data = arr + "";

data = data.replace(/,/g, "");

let sum = 0;
for (let i of data) {
  sum += parseInt(i, 10);
}
console.log(sum);
