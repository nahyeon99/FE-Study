function cal(a, b) {
  return a(10, 10) + b(10, 10);
}

cal(add, mul);
// 화살표 함수
function add(x, y) {
  return x + y;
}

function cal(a, b) {}

let addArrow = (x, y) => x + y;

// 선언
