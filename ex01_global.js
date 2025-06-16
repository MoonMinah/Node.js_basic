// 전역 객체 : global
console.log(global);
console.log("***************************");
global.setTimeout(() => {
  console.log("1초 뒤에 실행");
}, 1000);
global.var = "전역변수";

console.log(global);
//global 생략 가능
console.log(global.var);
func();

//전역변수: _file
console.log(`현재 실행 중인 파일명 : %s`, _filename);
console.log(`현재 실행 중인 파일의 상위 경로 : %s`, _dirname);
