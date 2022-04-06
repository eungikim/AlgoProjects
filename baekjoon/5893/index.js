// https://www.acmicpc.net/problem/5893
// TAG 수학, 구현, 임의 정밀도/큰 수 연산
// solved.ac Bronze 4
// 첫째 줄에 이진수 N이 주어진다. N은 최대 1000자리인 이진수이며, 0이 들어오는 경우는 없다.

const fs = require("fs");
const inputPath =
  process.platform === "darwin" ? __dirname + "/data.txt" : "/dev/stdin";
const N = fs.readFileSync(inputPath).toString();

solve(N);

function solve(binaryString) {
  let num = BigInt("0b" + binaryString);
  num = num * 17n;
  console.log(num.toString(2));
}
