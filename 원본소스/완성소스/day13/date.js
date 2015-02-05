/**
 * Date객체에 저장되어 있는 날짜에서 파라미터로 전달된 날짜까지 몇일이 남았는지를 계산하여 리턴해 준다.
 * 함수 내부에서 월 값을 -1로 계산하므로, 파라미터는 1~12사이의 값을 전달한다
 *
 * @params 	y - 년도
 * @params 	m - 월
 * @params 	d - 일
 */
Date.prototype.getDday = function(y, m, d) {
  // 파라미터로 받은 날짜로 새로운 Date객체를 생성한다.
  // 정상적인 날짜값을 받은 경우, Javascript의 객체에 전달할 때는 "-1"처리해 주어야 한다.
  var dday = new Date(y, m - 1, d);
  // 두 날짜간의 차이를 구한다.
  var cnt = dday.getTime() - this.getTime();
  // 남은 날짜는 1시간이라도 1일로 계산해야 하므로, 연산결과를 올림한다.
  var n = Math.ceil(cnt / (24 * 60 * 60 * 1000));
  return n;
};

/**
 * Date객체에 저장되어 있는 날짜의 요일 이름을 리턴한다.
 */
Date.prototype.getDayName = function() {
  var names = ["일", "월", "화", "수", "목", "금", "토"];
  // this.getDay()값은 일요일=0 ~ 토요일=6 사이의 값을 리턴하므로,
  // 위에서 선언한 배열에 대한 인덱스 값으로 사용한다.
  return names[this.getDay()];
};

/**
 * Date객체에 저장되어 있는 날짜를 "yyyy-mm-dd hh:mi:ss" 형식으로 리턴한다.
 */
Date.prototype.getDateTime = function() {
  // 현재 객체의 날짜값 구하기
  var y = this.getFullYear();
  var m = this.getMonth() + 1;
  var d = this.getDate();
  var h = this.getHours();
  var i = this.getMinutes();
  var s = this.getSeconds();

  // 10보다 작은 값에 대하여 앞에 "0"을 붙여서 자리수 보정
  if (m < 10)
    m = "0" + m;

  if (d < 10)
    d = "0" + d;

  if (h < 10)
    h = "0" + h;

  if (i < 10)
    i = "0" + i;

  if (s < 10)
    s = "0" + s;

  // 형식에 맞게 문자열 연결 및 리턴처리
  var result = y + "-" + m + "-" + d + " " + h + ":" + i + ":" + s;
  return result;
};

/**
 * Date객체에 저장되어 있는 날짜를 "yyyymmddhhmiss" 형식으로 리턴한다.
 */
Date.prototype.toString = function() {
  var datetime = this.getDateTime();
  datetime = datetime.replace(/-/g, "");
  datetime = datetime.replace(/ /g, "");
  datetime = datetime.replace(/:/g, "");
  return datetime;
};

/**
 * 날짜 계산기.
 * @params 	op - 두 번째 파라미터는 계산할 단위값이다.
 * 							 y(년도 계산), m(월 계산), d(날짜 계산), h(시간 계산), i(분 계산), s(초 계산)
 * @params 	value - 계산을 위한 값으로서 양수, 음수 모두 허용된다.
 */
Date.prototype.add = function(op, value) {
  switch (op) {
    case "y":
      this.setFullYear(this.getFullYear() + value);
      break;
    case "m":
      this.setMonth(this.getMonth() + value);
      break;
    case "d":
      this.setDate(this.getDate() + value);
      break;
    case "h":
      this.setHours(this.getHours() + value);
      break;
    case "i":
      this.setMinutes(this.getMinutes() + value);
      break;
    case "s":
      this.setSeconds(this.getSeconds() + value);
      break;
  }
};

/**
 * 날짜 계산에 의하여 변경된 값을 시스템의 오늘 날짜로 재설정
 */
Date.prototype.goToday = function() {
  var tmp = new Date();
  this.setTime(tmp.getTime());
};

