const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser"); //bodyparser는 클라이언트에있는 예를들어 이름 이메일 번호등을 가져오는것
const { User } = require("./models/User");
const mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true })); //application/x-www-form-urlencoded로된 데이터를 분석해서 가져옴
app.use(bodyParser.json()); //json으로된 데이터를 분석해서 가져옴

mongoose
  .connect(
    "mongodb+srv://kjk:abcd1234@boilerplate.luezu.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!~~안녕하세요 ~ 새해복 많이 받으세요123123213");
});

app.post("/register", (req, res) => {
  //회원가입할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어줍니다.
  const user = new User(req.body); //req.body는 예를들어 id:"hello" passwd:123 등등 이런형식이 들어가있음
  user.save((err, doc) => {
    //위에 user정보들이 저장된거
    if (err) return res.json({ success: false, err }); //에러 json형식으로 전달
    return res.status(200).json({
      //res.status(200)은 성공했다는것 json으로받음
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
