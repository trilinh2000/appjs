const accountController = require('../controller/account.controller');
const homeController=require('../controller/home.controller')
const middleware=require('../middleware/middleware');
const ErrorHandle=require('../middleware/error.handle');
const accountMiddle=require('../middleware/account.middle');
const productController=require('../controller/product.controller');
module.exports=app =>{
    const express=require('express');
    const router=express.Router();
    router
    .get('/home',accountMiddle.loggedin,middleware(homeController.getAccounts))
    .get('/home/create',accountMiddle.Login,middleware(accountController.showCreate))
    .post('/home/create',middleware(accountController.createAccount))
    .get('/home/login',accountMiddle.Login,middleware(accountController.showLogin))
    .post('/home/login',middleware(accountController.login))
    .get('/home/logout',accountMiddle.loggedin,accountController.logout)
    .get('/home/product/create',accountMiddle.loggedin,middleware(productController.showFormCreateProduct))
    .post('/home/product/create',accountMiddle.loggedin,middleware(productController.createProduct))
    app.use(router);
    app.use(ErrorHandle);
}