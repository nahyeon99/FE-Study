let str = "5,4,10,2,5";
let arr = str.split(",");

let sum = 0;

for (let v of arr) {
  sum += parseInt(v, 10);
}

console.log(`평균은 ${sum / str.length}`);

// let str = '5,4,10,2,5';
// let data = str.split(',');

// // split: string -> array

// data = str.split(",");

// let sum = 0;
// for(let i of data) {
//   sum += parseInt(i, 10);
// }
// let avg = sum/data.length;
// console.log(avg);
