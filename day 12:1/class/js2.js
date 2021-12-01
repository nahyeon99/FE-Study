// 내 코드 수정 중

let 전교점수 = [
  // 1반
  [
    [10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60],
  ],
  // 2반
  [
    [10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60],
  ],
];
let sum = 0;
let result = 0;
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 5; j++) {
    sum += 전교점수[0][i][j];
    result += sum / j;
  }
}
console.log(result);

// let 전교점수 = [
//   // 1반
//   [
//     [10, 20, 30, 40, 50],
//     [20, 30, 40, 50, 60],
//   ],
//   // 2반
//   [
//     [10, 20, 30, 40, 50],
//     [20, 30, 40, 50, 60],
//   ],
// ];

// let 행렬 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(행렬[0]);
// console.log(행렬[0] + 행렬[0]);
// console.log(행렬[0] * 2);
// console.log(행렬[0].toString());
// console.log(행렬[0] + "");

// let sample = [1, 2, 3];
// // in 과 of 모두 사용 가능, in이 array에선 더 깔끔하다.
// for (let i in sample) {
//   sample[i] *= 2;
// }
// console.log(sample);
