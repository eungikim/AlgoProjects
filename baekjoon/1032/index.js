// https://www.acmicpc.net/problem/1032
// TAG 구현, 문자열
// solved.ac Bronze 1
// 첫째 줄에 파일 이름의 개수 N이 주어진다. 둘째 줄부터 N개의 줄에는 파일 이름이 주어진다.
// N은 50보다 작거나 같은 자연수이고 파일 이름의 길이는 모두 같고 길이는 최대 50이다. 파일이름은 알파벳 소문자와 '.' 로만 이루어져 있다.

const fs = require("fs");
const inputPath =
  process.platform === "darwin" ? __dirname + "/data.txt" : "/dev/stdin";
const fileNameArray = fs.readFileSync(inputPath).toString().trim().split("\n");
const numberOfFile = Number(fileNameArray.shift());

solve(numberOfFile, fileNameArray);

function solve(numberOfFile, fileNameArray) {
  let result = "";
  for (let i = 0; i < fileNameArray[0].length; i++) {
    const letter = fileNameArray[0][i];
    result += letter;

    for (let j = 1; j < numberOfFile; j++) {
      if (letter != fileNameArray[j][i]) {
        result = result.slice(0, -1) + "?";
        break;
      }
    }
  }
  console.log(result);
}
