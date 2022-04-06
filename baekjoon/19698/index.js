// https://www.acmicpc.net/problem/19698
// TAG 수학, 사칙연산
// solved.ac Bronze 4
// 1 =< N, W, H, L =< 1000

const fs = require("fs");
const inputPath =
  process.platform === "darwin" ? __dirname + "/data.txt" : "/dev/stdin";
const [N, W, H, L] = fs
  .readFileSync(inputPath)
  .toString()
  .split(" ")
  .map(Number);

solve(N, W, H, L);

function solve(numOfCow, width, height, sizeOfRoom) {
  if (width < sizeOfRoom || height < sizeOfRoom) {
    console.log(0);
  } else {
    const widthQuotient = parseInt(width / sizeOfRoom);
    const heightQuotient = parseInt(height / sizeOfRoom);
    const result = widthQuotient * heightQuotient;
    // console.log(
    //   `widthQuotient:${widthQuotient}, heightQuotient:${heightQuotient}, result:${result}`
    // );

    console.log(Math.min(result, numOfCow));
  }
}
