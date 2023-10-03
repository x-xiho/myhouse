
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors()); //cors 허용

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

////////////////////////////////


const UserInfo = []; // 유저데이터 임시 저장 배열


//// 데이터 이름 고치기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1002


// 프론트에서 데이터 달라고하면 백엔드에서 보내줌
app.get('/deliver/UserInfo', function (req, res) {
  res.json(UserInfo);
});


// 프론트에서 보낸유저 데이터 백엔드에 저장
app.post('/save/UserInfo', function (req, res) {
  const { gender } = req.body;
  const newUserInfo = { gender };
  
  UserInfo.push(newUserInfo);
  console.log('새로운 데이터가 추가되었습니다:', newUserInfo); // 콘솔에 데이터 출력
  console.log('현재 저장된 데이터:', UserInfo);
  res.json(newUserInfo);
});



app.listen(4000, () => console.log('켜졌다!'))