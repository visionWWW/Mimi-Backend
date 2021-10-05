import express from 'express';
import {createConnection} from "typeorm";
import {Router} from "express";
// import {Photo} from "./entity/Photo";
import {User} from "./entity/User";
import router from "./router/index";
let app = express();

  app.use('/', (req, res) => {
  res.send('Hello test!, 모든 http method를 허용하였습니다.');
})

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