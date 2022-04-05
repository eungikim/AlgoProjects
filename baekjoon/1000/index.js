// https://www.acmicpc.net/problem/1000
// TAG 수학, 사칙연산, 구현
// solved.ac Bronze 5
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

const fs = require("fs");
const inputPath =
  process.platform === "darwin" ? __dirname + "/data.txt" : "/dev/stdin";
const [input0, input1] = fs.readFileSync(inputPath).toString().split(" ");
// readFileSync('dd', {encoding:'utf8', flag:'r'})

const result = solve(input0, input1);
console.log(result);

function solve(firstStr, secondStr) {
  const numA = Number(firstStr);
  const numB = Number(secondStr);
  return numA + numB;
}
