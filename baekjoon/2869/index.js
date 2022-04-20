// https://www.acmicpc.net/problem/2869
// TAG 수학
// solved.ac Bronze 1
// 첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다. (1 ≤ B < A ≤ V ≤ 1,000,000,000)

const fs = require("fs");
const inputPath =
  process.platform === "darwin" ? __dirname + "/data.txt" : "/dev/stdin";
const [A, B, V] = fs
  .readFileSync(inputPath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

solve(A, B, V);

function solve(climb, slide, height) {
  const hc = height - climb;
  const cs = climb - slide;
  console.log(Math.ceil(hc / cs) + 1);
}
