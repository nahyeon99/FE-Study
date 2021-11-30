// 1번
let arr = [10, 20, 30, 10, 20, 30, 40, 10];

let sum = 0,
  avg = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
avg = sum / arr.length;
console.log(avg);

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] - avg;
  sum += arr[i] ** 2;
}

let 분산 = sum / arr.length;
let 표준편차 = 분산 ** 0.5;

console.log(`분산 : ${분산}`);
console.log(`표준편차 : ${표준편차}`);

// 2번
let s = "5, 4, 10, 2, 5";

let split_s = s.split(",");
console.log(split_s);

let sum = 0;
for (let variable of split_s) {
  sum += parseInt(variable, 10);
}
let avg = sum / split_s.length;
console.log(`평균은 ${avg}`);
