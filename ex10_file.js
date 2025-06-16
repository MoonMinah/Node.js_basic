// 파일 쓰기 : writeFileSync()/ writeFile()
const fs = require("fs");
let data = `How are you? 반갑습니다.`;
fs.writeFileSync("result.txt", data);
console.log("파일쓰기 완료 result.txt파일 확인 바람");

fs.writeFile("result2.txt", data, "utf-8", (err) => {
  if (err) {
    console.err("파일 쓰기 중 에러", err.message);
    return;
  }
  console.log("result2.tst에 쓰기 완료");
});
console.log("Bye Bye");
