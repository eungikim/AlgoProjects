// https://www.acmicpc.net/problem/2338
// TAG 수학, 사칙연산, 임의 정밀도 / 큰 수 연산
// solved.ac Bronze 5
// 첫째 줄에 A가, 둘째 줄에 B가 주어진다. 각각의 수는 10진수로 1,000자리를 넘지 않으며 양수와 음수가 모두 주어질 수 있다.

const fs = require("fs");
const inputPath =
  process.platform === "darwin" ? __dirname + "/data.txt" : "/dev/stdin";
const [input0, input1] = fs.readFileSync(inputPath).toString().split("\n");

solve(input0, input1);

function solve(firstStr, secondStr) {
  const numA = BigInt(firstStr);
  const numB = BigInt(secondStr);
  console.log(String(numA + numB));
  console.log(String(numA - numB));
  console.log(String(numA * numB));
}
