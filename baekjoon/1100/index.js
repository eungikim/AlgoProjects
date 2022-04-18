// https://www.acmicpc.net/problem/1100
// TAG 구현, 문자열
// solved.ac Bronze 2
// 체스판은 8×8크기이고, 검정 칸과 하얀 칸이 번갈아가면서 색칠되어 있다. 가장 왼쪽 위칸 (0,0)은 하얀색이다.
// 첫째 줄부터 8개의 줄에 체스판의 상태가 주어진다. ‘.’은 빈 칸이고, ‘F’는 위에 말이 있는 칸이다.

const fs = require("fs");
const inputPath =
  process.platform === "darwin" ? __dirname + "/data.txt" : "/dev/stdin";
const chessRowArr = fs.readFileSync(inputPath).toString().trim().split("\n");

solve(chessRowArr);

function solve(chessRowArr) {
  let whitePieceNumber = 0;
  chessRowArr.forEach((currentRow, index) => {
    // index % 2 == 0 하얀칸이 첫번째
    whitePieceNumber += getWhiteChessPiece(currentRow, index % 2 == 0);
  });
  console.log(whitePieceNumber);
}

function getWhiteChessPiece(chessRow, startWhiteSquare) {
  let whitePieceNumber = 0;
  // console.log(chessRow, startWhiteSquare);
  for (let index = 0; index < chessRow.length; index++) {
    const pieceInSquare = chessRow[index];
    // console.log(element);
    if (startWhiteSquare && index % 2 == 0 && pieceInSquare === "F")
      whitePieceNumber++;
    else if (!startWhiteSquare && index % 2 == 1 && pieceInSquare === "F")
      whitePieceNumber++;
  }
  return whitePieceNumber;
}

// 다른 사람들 코드 보니 chessRow index 와 한 칸의 index 를 합하여 짝수인지 검색하여 F 판별하더라
