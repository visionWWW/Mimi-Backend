import express from 'express';

let app = express();

// express에는 json 데이터를 파싱하는 모듈이 내장되어있다.
// 하지만 json만 되고 x-www-form-urlencoded를 파싱하기 위해서 아래를 확장해야 한다.
app.use(express.urlencoded({
  extended: true
}))

// 모든 http method 허용, 스트링 리턴
app.use('/hello1', (req, res) => {
  res.send('Hello test!, 모든 http method를 허용하였습니다.');
})

app.get('/hello2', (req, res) => {
  res.send('Hello test!, get 방식만 허용했습니다.');
})

// GET + query 파라메터로 데이터 전송
// /hello3 뒤에 ?name="쓰고 싶은 이름" 쓰면 결과 나옴
app.get('/hello3', (req, res) => {
  const {name} = req.query;
  res.send(`Hello ${name}`);
})

// GET + uri 파라메터로 데이터 전송
app.get('/hello4/:name', (req, res) => {
  const {name} = req.params;
  res.send(`Hello your name is ${name}`);
})

// post 전송, x-www-form-urlencoded 방식 -> 에러 발생
// app.post('/hello5', (req, res) => {
//   const {name} = req.body;
//   res.send(`Hello ${name}`);
// })

app.listen(8080, () => {
  console.log('server is listening 8080');
});