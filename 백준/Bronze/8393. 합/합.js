const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((n) => Number(n));

let answer = 0;
let num = input[0];

for (let i = 1; i <= num; i++) {
  answer += i;
}
console.log(answer);
