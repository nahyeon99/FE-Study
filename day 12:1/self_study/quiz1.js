let str = [10, 20, 30, 10, 20, 30, 40, 10];

let result = 0;
for (let num of str) {
  result += num;
}
result = result / str.length;

let 표준편차 = 0;
for (let num of str) {
  표준편차 += (num - result) ** 2;
}
표준편차 = 표준편차 / str.length;

let 분산 = 표준편차 ** 0.5;

console.log(`평균은 ${result}`);
console.log(`표준편차는 ${표준편차}`);
console.log(`분산은 ${분산}`);
