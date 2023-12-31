const accountModel=require('../model/account.model')
const productModel=require('../model/product');
const bodyParser=require('body-parser');
bodyParser.json();
bodyParser.urlencoded({extended:true});
module.exports.getAccounts=async(req,res)=>{
    /**
     * get account
     */
    const accounts= await productModel.find();
    res.render('index',{items:accounts});
            // return res.status(200).json(accounts);
            
       }
module.exports.send=async(req,res,next)=>{

        const accounts= await productModel.findOne().populate('productId');
        // const accounts= await accountModel.find();
}