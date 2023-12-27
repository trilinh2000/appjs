const accountController = require('../controller/account.controller');
const middleware=require('../middleware/middleware');
const ErrorHandle=require('../middleware/error.handle')
module.exports=app =>{
    const express=require('express');
    const router=express.Router();
    router
    .get('/',(req,res) =>{
        res.render('index');
    })
    .get('/accounts',middleware(accountController.getAccounts))
    .get('/create',middleware(accountController.showCreate))
    .post('/create',middleware(accountController.createAccount))
    app.use(router);
    app.use(ErrorHandle);
}