import express from 'express';
import {createConnection} from "typeorm";
import {Router} from "express";
// import {Photo} from "./entity/Photo";
import {User} from "./entity/User";
import router from "./router/index";
let app = express();

// express에는 json 데이터를 파싱하는 모듈이 내장되어있다.
// 하지만 json만 되고 x-www-form-urlencoded를 파싱하기 위해서 아래를 확장해야 한다.
// app.use(express.urlencoded({
//   extended: true
// }))

//모든 http method 허용, 스트링 리턴
  app.use('/', (req, res) => {
  res.send('Hello test!, 모든 http method를 허용하였습니다.');
})

// app.get('/hello2', (req, res) => {
//   res.send('Hello test!, get 방식만 허용했습니다.');
// })

// GET + query 파라메터로 데이터 전송
// /hello3 뒤에 ?name="쓰고 싶은 이름" 쓰면 결과 나옴
// app.get('/hello3', (req, res) => {
//   const {name} = req.query;
//   res.send(`Hello ${name}`);
// })

// GET + uri 파라메터로 데이터 전송
// app.get('/hello4/:name', (req, res) => {
//   const {name} = req.params;
//   res.send(`Hello your name is ${name}`);
// })

// post 전송, x-www-form-urlencoded 방식 -> 에러 발생
// app.post('/hello5', (req, res) => {
//   const {name} = req.body;
//   res.send(`Hello ${name}`);
// })

// 에러
// app.post('/hello5', (req, res) => {
//   const result = {
//     code: 0,
//     message: 'success'
//   };
//   res.send(result);
// })
// 에러
// app.post('/hello6', (req, res) => {
//   console.log(req.body);
//   const result = req.body;
//   res.send(result);
// })
//
// app.use(express.json());
//
// app.use(express.urlencoded({
//   extended: true
// }))

// app.listen(8080, () => {
//   console.log('server is listening 8080');
// });

app.use('/api', router);

createConnection().then(connection => {
  app.listen(8080, async () => {
    console.log('잘 뜹니다~');
    // const photo1 = new Photo();
    // photo1.url = "me.jpg";
    // await connection.manager.save(photo1);

    // const user = new User();
    // user.nickname = "John";
    // user.password = 1234;
    // user.photos = [photo1]; //foreign key가 들어간다

    // await connection.manager.save(user); //photo는 할 필요 없음

  });


});