// package Define
var School = new Object();

// Class Define
School.Member = function(p_id, p_name) {
  this.id = p_id;
  this.name = p_name;
};

// 아이디 할당
School.Member.prototype.setId = function(p_id) {
  this.id = p_id;
};

// 이름 할당
School.Member.prototype.setName = function(p_name) {
  this.name = p_name;
};

// 아이디 리턴
School.Member.prototype.getId = function() {
  return this.id;
};

// 이름 리턴
School.Member.prototype.getName = function() {
  return this.name;
};

// 정보 확인
School.Member.prototype.getInfo = function() {
  return this.getId() + "님의 이름은 " + this.getName() + "입니다.";
};
