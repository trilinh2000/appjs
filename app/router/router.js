const accountController = require('../controller/account.controller');
module.exports=app =>{
    const express=require('express');
    const router=express.Router();
    router
    .get('/',(req,res) =>{
        res.render('index');
    })
    .get('/accounts',accountController.getAccounts)
    .get('/create',accountController.showCreate)
    .post('/create',accountController.createAccount)
    app.use(router);
}