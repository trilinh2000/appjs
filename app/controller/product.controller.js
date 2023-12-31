const accountModel=require('../model/account.model');
const productModel=require('../model/product');

module.exports.showFormCreateProduct=async(req,res,next) =>{
    
    await res.render('accounts/product/create');
    console.log(res.locals.account=req.session.account);
    
}
module.exports.createProduct=async(req,res,next) =>{
    const body={title:title,money:money}=req.body;
    const account=req.session.account;
    const find=await accountModel.findOne(account)
    if(!body){
        throw new Error("invalid not found")
    }
    else{
        const createProduct=await productModel.create({productId:find.id,title:title,money:money});
        if(createProduct.length===0){
            console.log('not create');
        }
        else{
            console.log(createProduct);
            res.redirect('/home');
        }

    }
}
