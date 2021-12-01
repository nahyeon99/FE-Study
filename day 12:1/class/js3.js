let 행렬 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(행렬[0]);
console.log(행렬[0] + 행렬[0]);
console.log(행렬[0] * 2);
console.log(행렬[0].toString());
console.log(행렬[0] + "");

let sample = [1, 2, 3];
// in 과 of 모두 사용 가능, in이 array에선 더 깔끔하다.
for (let i in sample) {
  sample[i] *= 2;
}
console.log(sample);
