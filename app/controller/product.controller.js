const accountModel=require('../model/account.model');
const productModel=require('../model/product');

module.exports.showFormCreateProduct=(req,res,next) =>{
    res.session.account=req.session.account;
    // res.render('accounts/product/create');
    return status(200).json(account);
}
module.exports.createProduct=(req,res,next) =>{
    const account=req.session.account;
    return status(200).json(account);
}
