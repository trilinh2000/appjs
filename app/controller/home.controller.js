const accountModel=require('../model/account.model')
const productModel=require('../model/product');
const fs = require('fs');
const path = require('path');
module.exports.getAccounts=async(req,res)=>{
    /**
     * get account
     */
    const data= await productModel.find();
    res.render('index',{items:data});
            // return res.status(200).json(accounts);
            
       }
// module.exports.send=async(req,res,next)=>{

//         const accounts= await productModel.findOne().populate('productId');
//         // const accounts= await accountModel.find();
// }