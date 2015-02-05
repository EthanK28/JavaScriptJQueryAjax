// package Define
var School2 = {};

// Class Define
School2.Member = function(p_id, p_name) {
  this.id = p_id;
  this.name = p_name;
};

School2.Member.prototype = {
  // 아이디 할당
  "setId" : function(p_id) {
    this.id = p_id;
  },

  // 이름 할당
  "setName" : function(p_name) {
    this.name = p_name;
  },

  // 아이디 리턴
  "getId" : function() {
    return this.id;
  },

  // 이름 리턴
  "getName" : function() {
    return this.name;
  },

  // 정보 확인
  "getInfo" : function() {
    return this.getId() + "님의 이름은 " + this.getName() + "입니다.";
  }
};
