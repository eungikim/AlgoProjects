// https://www.acmicpc.net/problem/3448
// TAG 구현, 문자열
// solved.ac Bronze 1
// 첫째 줄에 테스트 케이스의 개수 N
// 각 테스트 케이스의 다음에는 빈 줄이 한 칸씩 있다. 각 줄은 100글자를 넘지 않고, 줄의 수도 200줄을 넘지 않는다.

const fs = require("fs");
const inputPath =
  process.platform === "darwin" ? __dirname + "/data.txt" : "/dev/stdin";
const ocrString = fs.readFileSync(inputPath).toString().trim().split("\n");
const numberOfTest = ocrString.shift();

// console.log(ocrString);
solve(numberOfTest, ocrString);

function solve(numberOfTest, ocrString) {
  let strLength = 0;
  let sharpCount = 0;

  for (let index = 0; index < ocrString.length; index++) {
    const e = ocrString[index];
    if (e === "") {
      print(getPercentOfOCR(strLength, sharpCount));
      strLength = 0;
      sharpCount = 0;
    }
    strLength += e.length;
    sharpCount += getSharpCount(e);
  }

  print(getPercentOfOCR(strLength, sharpCount));
}

function getSharpCount(string) {
  let numberOfShap = 0;
  for (const char of string) {
    if (char === "#") numberOfShap++;
  }
  return numberOfShap;
}

function getPercentOfOCR(strLength, sharpCount) {
  let a = (strLength - sharpCount) / strLength;
  a = Math.ceil(a * 1000);
  return a / 10;
}

function print(percent) {
  console.log(`Efficiency ratio is ${percent}%.`);
}
