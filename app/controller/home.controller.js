const accountModel=require('../model/account.model')
const productModel=require('../model/product');
const fs = require('fs');
const path = require('path');
module.exports.getAccounts=async(req,res)=>{
    /**
     * get account
     */
    const account=req.session.account;
    const find=await accountModel.findOne(account)
    const obj={
        productId:find.id,
    }
    // if(account.length===0){
    //     res.render('index');
    // }
    // else{
    
    const data= await productModel.find().populate({ path: 'productId' });
    console.log(data);
    res.render('index',{items:data});
            // return res.status(200).json(accounts);
            
    //    }
    }
// module.exports.send=async(req,res,next)=>{

//         const accounts= await productModel.findOne().populate('productId');
//         // const accounts= await accountModel.find();
// }