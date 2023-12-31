const accountModel=require('../model/account.model')
const productModel=require('../model/product');
module.exports.getAccounts=async(req,res)=>{
    /**
     * get account
     */
    {
        const accounts= await productModel.findOne().populate('productId');
       if(!accounts){
            throw new ErrorHandle(400,'Resource not found');
       }else{
          console.log(accounts.productId);
            return res.status(200).json(accounts.productId);
            
       }
        
    }
}