module.exports = function(app){
    const user = require('./userController');
    const jwtMiddleware = require('../../config/jwtMiddleware');

    // 0. 테스트 API
    // app.get('/app/test', user.getTest)

    // 1. 회원가입 API
    app.post('/users', user.postUsers);
};


// TODO: 자동로그인 API (JWT 검증 및 Payload 내뱉기)
// JWT 검증 API
// app.get('/app/auto-login', jwtMiddleware, user.check);