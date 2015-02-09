/**
 *
 *
 *
 * 여기에 작성하세요.
 *
 *
 *
 */

var calc = {};

// 멤버 변수 추가
calc.x = 0;
calc.y = 0;

// 멤버변수에 값을 변경시키기 위한 메서드 추가
calc.setValue  = function(p1, p2){
    /* 파라미터 값을 멤ㅂ*/
    this.x = p1;
    this.y = p2;
};

calc.plus = function(){
    return this.x + this.y;
};

calc.minus = function(){
    return this.x - this.y;
};

calc.result = function(){
  /* 어떤 메서드 안에서 같은 객체 안에 존재하는 다른 메서드를 호출하는 경우에도 "this."라는 예약어를 사용해야 한다.*/
    var value1 = this.plus();
    var value2 = this.minus();

    document.write("<p> 덧셈 결과: "+value1+"</p>");
    document.write("<p> 뺄셈 결과: "+value2+"</p>");

};