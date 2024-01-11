const express=require('express');
express.json();
express.urlencoded({extended:true});
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
    console.log(obj);   
    const data= await productModel.find().populate({ path: 'productId' });
    res.render('index',{items:data});
            // return res.status(200).json(accounts);
            
    //    }
    }
module.exports.delete=async(req,res,next)=>{
    
    const obj={
        _id:req.query.id,
    }
    console.log(obj);
    if(!req.query.id){
        console.log("err");
        res.render('index');
    }
    else{
        const deleteId=await productModel.findOneAndDelete(obj); 
        console.log(deleteId);
        res.redirect('/home');
    }
}