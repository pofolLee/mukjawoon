const express = require('express');
const app = express();

/* 데이터 유효성 검사 라이브러리 */
const Joi = require('joi');

/* request body json data parsing */
app.use(express.json());

/* get 테스트 */
app.get('/api/getTest', (req, res) => {
    res.send([1, 2, 3]);
});

/* 유저 데이터 */
const users = [
    {id:1, name:'user1'},
    {id:2, name:'user2'},
    {id:3, name:'user3'}
]

/* get 아이디 찾기 예제 */
app.get('/api/getTest/:id', (req, res) => {
    const user = users.find( user => user.id === parseInt(req.params.id));
    if ( !user ) res.status(404).send('ID was not found');
    res.send(user);
});

/* get 전체 조회 예제 */
app.get('/api/getAllUser', (req, res) => {
    res.send(users);
});

/* post 예제 */
app.post('/api/postTest', (req, res) => {
    const user = {
        id : users.length +1,
        name : req.body.name
    }
    users.push(user);
    res.send(user);
});

/* post joi로 유효성 검사 예제 */
app.post('/api/postTest2', (req, res) => {
    // 유효성 검사 스키마 생성
    const schema = {
        name : Joi
        .string()       // 문자열 타입
        .min(3)         // 최소길이 3
        .required()     // undefined를 허용하지 않음
    }
    
    // const result = Joi.validate(req.body, schema);   // schema.validate()로 바로 호출하는 것으로 변경됨
    const result = schema.name.validate(req.body.name);
    console.log(result);

    if ( result.error ) {
        // 400 Bad request
        res.status(400).send('Please check your name');
        return;
    }

    const user = {
        id : users.length +1,
        name : req.body.name
    }
    users.push(user);
    res.send(`post test success`);
});

/* put 예제 */
app.put('/api/putTest/:id', (req, res) => {
    const user = users.find( user => user.id === parseInt(req.params.id));
    if ( !user ) res.status(404).send('ID was not found');

    const schema = {
        name : Joi
        .string()
        .min(3)
        .required()
    };

    const result = schema.name.validate(req.body.name);
    if ( result.error ) {
        res.status(400).send('Please check your name');
        return;
    }

    user.name = req.body.name;
    res.send('put test success');
});

/* delete 예제 */
app.delete('/api/deleteTest/:id', (req, res) => {
    const user = users.find( user => user.id === parseInt(req.params.id));
    if ( !user ) return res.status(404).send('ID was not found');

    const index = users.indexOf(user);
    users.splice(index, 1);

    res.send('delete test success');
});

// get, post, put, delete 참고 블로그 : https://velog.io/@smooth97/Node.js-Restful-API-wok2wqo7yu

// Joi 참고 블로그 : https://joi.dev/api/?v=17.3.0#arrayminlimit

const port = process.env.PORT || 3500;
app.listen(port, () => console.log(`Listening on port ${port}...`));

