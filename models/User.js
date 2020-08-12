const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, //예를 들어 사용자가 zmffjq 0202@naver.com입력했을때 띄어쓰기를 없애줌
    unique: 1,
  },
  password: {
    type: String,
    maxlength: 50,
  },
  //role에 type에다가 number을 왜주냐면은 관리자는 0 사용자는 1 이런식으로 번호를 부여하여 관리자와 사용자를 나눔
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  //token을 이용하여 유효성을 관리
  token: {
    type: String,
  },
  //tokenExp는 token의 유효기간
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema); //모델로 스키마를 감싸줌

//다른곳에서 쓸수있게 exports를 사용해줍니다.
module.exports = { User };
