const accountModel=require('../model/account.model')
const productModel=require('../model/product');
module.exports.getAccounts=async(req,res)=>{
    /**
     * get account
     */
    {
        const accounts= await productModel.find().populate("account")
       if(!accounts){
            throw new ErrorHandle(400,'Resource not found');
       }else{
            return res.status(200).json(accounts);
       }
        
    }
}