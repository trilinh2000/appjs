const accountModel=require('../model/account.model')
const ErrorHandle=require('../helpers/ErrorResponse');

module.exports.getAccounts=async(req,res)=>{
    /**
     * get account
     */
    {
        const accounts= await accountModel.find();
       if(!accounts){
            throw new ErrorHandle(400,'Resource not found');
       }else{
            return res.status(200).json(accounts);
       }
        
    }
}