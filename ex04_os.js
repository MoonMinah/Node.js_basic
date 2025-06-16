// os (내장모듈)
const os = require("os");
console.log("os 시스템의 타입 : %s", os.type());
console.log("시스템의 호스트명 : %s", os.hostname());
//freemem=가용메모리, totalmem=사용가능한 메모리
console.log("시스템의 메모리 %d bytes/ %d bytes", os.freemem(), os.totalmem);

console.log("---cpu정보---");
console.log(os.cpus().length); //cpu 코어 수 반환
console.log(os.cpus());
console.log("---시스템의 네트워크 정보---");
console.log(os.networkInterfaces());
