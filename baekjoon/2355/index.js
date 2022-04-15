// https://www.acmicpc.net/problem/2355
// TAG 수학, 사칙연산
// solved.ac Bronze 3
// 첫째 줄에 두 정수 A, B가 주어진다. (-2,147,483,648 ≤ A, B ≤ 2,147,483,647)
// 첫째 줄에 답을 출력한다. (-2,147,483,648 ≤ 답 ≤ 2,147,483,647)

const fs = require("fs");
const inputPath =
  process.platform === "darwin" ? __dirname + "/data.txt" : "/dev/stdin";
const [A, B] = fs
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (A > B) solve(B, A);
else solve(A, B);

function solve(firstNum, secondNum) {
  let result = 0;
  const HAP = firstNum + secondNum;
  const size = getSize(firstNum, secondNum);
  // console.log(`HAP: ${HAP}, size: ${size}, size/2: ${size / 2}`);

  result = (HAP * size) / 2;
  console.log(result);
}

function getSize(firstNum, secondNum) {
  return secondNum - firstNum + 1;
}
