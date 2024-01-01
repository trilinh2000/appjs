const accountModel=require('../model/account.model');
const productModel=require('../model/product');
const fs=require('fs');
const path=require('path');


module.exports.showFormCreateProduct=async(req,res,next) =>{
    
    await res.render('accounts/product/create');
    console.log(res.locals.account=req.session.account);
    
}
module.exports.createProduct=async(req,res,next) =>{
    const {name,title,money}=req.body;
    console.log({name,title,money});
    const account=req.session.account;
    const find=await accountModel.findOne(account)
    const obj={
        productId:find.id,
        name:name,
        title:title,
        money:money,
        img:{
            data: fs.readFileSync(path.join('app/uploads/'+req.file.filename)),
            contentType: 'image/jpg'
    }
}   
    console.log(obj);
    if(!obj){
        throw new Error("invalid not found")
    }
    else{
        const createProduct=await productModel.create(obj);
        if(createProduct.length===0){
            console.log('not create');
        }
        else{
            console.log(createProduct);
            res.redirect('/home');
        }

    }
}
