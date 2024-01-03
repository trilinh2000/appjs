const accountController = require('../controller/account.controller');
const homeController=require('../controller/home.controller')
const middleware=require('../middleware/middleware');
const ErrorHandle=require('../middleware/error.handle');
const accountMiddle=require('../middleware/account.middle');
const productController=require('../controller/product.controller');

const forgot=require('../controller/forgotPass.controller');

const upload=require('../model/uploadfile.model')

const bodyParser=require('body-parser');
bodyParser.json();
bodyParser.urlencoded({extended:false});
module.exports=app =>{
    const express=require('express');
    const router=express.Router();
    router
    .get('/home',accountMiddle.loggedin,middleware(homeController.getAccounts))
    .get('/home/create',accountMiddle.Login,middleware(accountController.showCreate))
    .post('/home/create',middleware(accountController.createAccount))
    .get('/home/verify',accountController.verify)
    .get('/home/login',accountMiddle.Login,middleware(accountController.showLogin))
    .post('/home/login',middleware(accountController.login))
    .get('/home/logout',accountMiddle.loggedin,accountController.logout)
    .get('/home/product/create',accountMiddle.loggedin,middleware(productController.showFormCreateProduct))
    .post('/home/product/create',upload.single('image'),accountMiddle.loggedin,middleware(productController.createProduct))
    .get('/home/password/reset',forgot.showFormForgotPassword)
    .post('/home/password/reset/email',forgot.sendLink)
    .get('/home/password/reset/:email',forgot.showFormResetPass)
    .post('/home/password/reset',forgot.Reset)
    app.use(router);
    app.use(ErrorHandle);
}