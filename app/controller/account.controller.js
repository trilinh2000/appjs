const accountModel=require('../model/account.model');
const ErrorHandle=require('../helpers/ErrorResponse');
require('dotenv/config');
const bcrypt=require('bcrypt');
module.exports.showCreate=async(req,res,next)=>{
     res.render('accounts/create');
}
module.exports.createAccount=async(req,res,next)=>{
    const body={username:username,password:password,email:email,address:address,phone:phone}=req.body;
    console.log(body);
    if(!username||!password||!email||!phone){
        throw new ErrorHandle(400,"Nhap du thong tin");
    }
    else{
        const newAccount=await accountModel.find({body});
        if(newAccount.length===!0){
            console.log(newAccount);
            throw new ErrorHandle(404,'account invalid');
        }
        else{
            bcrypt.hash(body.password,parseInt(process.env.BCRYPT_HASH)).then(async(hashed) =>{
            const newcreate=await accountModel.create({username:username,password:hashed,email:email,address:address,phone:phone});
            if(!newcreate){
                throw new ErrorHandle(402,'Create error');
            }
            res.redirect('/home/login')
            })
            
        }
    }
}
module.exports.showLogin=async(req,res,next)=>{
    try {
        await res.render('accounts/login');
    } catch (error) {
        console.log(error);
    }
}
module.exports.login=async(req,res,next) =>{
    const body={email:email,password:password}=req.body;
    if(!email||!password){
        throw new ErrorHandle(400,"Nhap du thong tin");
    }
    else{
        const account=await accountModel.findOne({email:email});
        if(!account){
            throw new ErrorHandle(404,'account invalid');
        }
        else{
            bcrypt.compare(password,account.password,(err,result)=>{
                if(result==true){
                    req.session.loggedin=true;
                    req.session.account=account;
                    console.log('login')
                    res.redirect('/home');

                }
                else{
                    res.render('accounts/login');
                }
            });
        }
    }
}
module.exports.logout=(req,res) =>{
    req.session.destroy((err) =>{
        if(err){
            res.redirect('/500');
        }
        res.redirect('/home/login');
        console.log("Logout")
    })
}