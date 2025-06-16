// 전역 객체 : consle, process, exports ...
console.log("정수 값 출력하기 : %d", 555);
console.log("실수 값 출력하기 : %d", 3.141592);
console.log(
  "실수 값 소수점 어디까지 출력할지 설정 : %s",
  (3.141592).toFixed(2)
);
console.log("문자열 : %s", "Hello World");
const obj = {
  num: 1,
  name: "홍길동",
  age: 22,
};
console.log("JSON객체:%j", obj);
console.log("%d %% 할인", 30);

//테이블 형식으로 출력
console.table([obj, { num: 2, name: "김영희", age: 21 }]);

console.time("sum"); // label 문자열
let result = 0;
for (let i = 0; i < 10000; i++) {
  result += i;
}
console.timeEnd("sum");
console.log(`1~10000까지의 누적 합 : %d`, result);

console.error("에러 출력 (x)표시");
console.warn("경고 출력 (!)표시");
console.debug("디버깅 정보");
console.info("간단한 정보 출력");

//검증할 때 사용 assertion -> 조건이 false일 때만 메시지 출력
console.asser(1 == 2);
console.assert(obj.name == "홍길동");
