// https://www.acmicpc.net/problem/1362
// TAG 구현
// solved.ac Bronze 2
// 적정 체중(o)와 실제 체중(w)가 한 줄에 입력됨으로써 시나리오가 시작됩니다(10 ≤ o, w ≤ 1000)
// 'E' 또는 'F'로 시작하며, 공백을 두고 숫자 n (1 ≤ n ≤ 999)

const fs = require("fs");
const inputPath =
  process.platform === "darwin" ? __dirname + "/data.txt" : "/dev/stdin";
const scenario = fs.readFileSync(inputPath).toString().trim().split("\n");

const PetStatus = {
  HAPPY: ":-)",
  SAD: ":-(",
  DIED: "RIP",
};

solve(scenario);

function solve(petScenario) {
  let scenarioNumber = 0;
  while (true) {
    let [appropriateWeight, currentWeight] = petScenario
      .shift()
      .split(" ")
      .map(Number);

    if (appropriateWeight === 0) break;
    scenarioNumber++;
    let isDead = false;

    while (true) {
      const [cmd, value] = petScenario.shift().split(" ");
      if (cmd === "E" && !isDead) {
        currentWeight -= Number(value);
        if (currentWeight <= 0) {
          isDead = true;
        }
      } else if (cmd === "F" && !isDead) {
        currentWeight += Number(value);
      } else if (cmd === "#") {
        printPetStatus(scenarioNumber, appropriateWeight, currentWeight);
        break;
      }
    }
  }
}

function printPetStatus(scenarioNumber, appropriateWeight, currentWeight) {
  if (currentWeight <= 0) {
    console.log(`${scenarioNumber} ${PetStatus.DIED}`);
  } else if (
    appropriateWeight / 2 < currentWeight &&
    currentWeight < appropriateWeight * 2
  ) {
    console.log(`${scenarioNumber} ${PetStatus.HAPPY}`);
  } else {
    console.log(`${scenarioNumber} ${PetStatus.SAD}`);
  }
}

// index로 관리하여 shift()를 안쓰거나 죽은다음 해당 시나리오를 넘기는 방법을 쓰면 더 빠를듯
// isDead 사용해서 연산 몇번 더 줄일 수 있겠지만 생략
