// 플랫폼에 익숙해져야 한다. 프로그래머스, 구름EDU
// - 사용 가능 라이브러리는 미리 확인!
// 언어 선택(속도 : C++, 풀이 : Python)
// 코드 스니펫(트리, 검색, 순열, 조합, 최단경로(예를 들어 다익다익스트라)), Cheat sheet 와 A4용지는 미리 준비
// 유용한 라이브러리는 미리 정리
// 예외처리 기억해두기

// 5 ~ 6시간
// 6 ~ 7문제

// 2시간씩 2문제
// 30분씩 4문제

// 몸풀기 2문제

// https://codingdojang.com/scode/393?answer_mode=hide
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열을 만드는 방법 (null, undefined는 memery에서 empty는 아님)
Array(10);
let x = Array(10);
x[2] = undefined;
x[3] = null;
x;

// [비어 있음 x 2, undefined, null, 비어있음 x 6]
x.length = 20;
x;
// [비어 있음 x 2, undefined, null, 비어 있음 x 16]
Array(10).fill(0);
Array(10).fill(10);
// Array(100).fill().map((_, i) => i + 1)
//[...Array(100)].map((_, i) => i + 1)

Array(100)
  .fill(1)
  .map((value, index) => value + index);

".".repeat(10);
".".repeat(10).split(".");
".".repeat(9).split(".");
Array.from("abc");
Array.from("a".repeat(10));
Array.from("ab".repeat(10));

// 정답
Array(100)
  .fill(1)
  .map((value, index) => value + index);

Array(100)
  .fill(1)
  .map((value, index) => value + index);

(
  Array(100)
    .fill(1)
    .map((value, index) => value + index) + ""
).split("8");

(
  Array(100)
    .fill(1)
    .map((value, index) => value + index) + ""
).split(/8/g).length - 1;
[1, 2, 3, 4, ", ", 1, 2, 3, 4]; // , 개수를 빼기 위해서 (length-1)
