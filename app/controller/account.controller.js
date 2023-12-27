const accountModel=require('../model/account.model');
module.exports.getAccounts=async(req,res)=>{
    /**
     * get account
     */
    {
        const accounts= await accountModel.find();
        console.log(accounts);
        return res.status(200).json(accounts);
        
    }
}
module.exports.showCreate=async(req,res)=>{
     res.render('accounts/create');
}
module.exports.createAccount=async(req,res)=>{
    const body={username:username,password:password,phone:phone,address:address}=req.body;
     const newAccount=await accountModel.create(body);
     return res.status(201).json(newAccount);
}