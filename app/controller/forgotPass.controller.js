const accountModel=require('../model/account.model');
const mailer=require('../utils/mailer');
require('dotenv/config');
const bcrypt=require('bcrypt');

module.exports.showFormForgotPassword=async(req,res,next)=>{
   res.render('accounts/password/email');
   console.log('Show form mail')

}
module.exports.sendLink=async(req,res)=>{
    const {email}=req.body;
    if(email){
        const find=await accountModel.findOne({email:email});
        if(find.length===0){
            console.log("k tim thay email");
            res.render('accounts/password/email');
        }
        else{
            bcrypt.hash(find.email,parseInt(process.env.BCRYPT_HASH)).then((hashEmail)=>{
                mailer.sendMail(find.email,"RESET PASSWOrd",`<a href="${process.env.APP_URL}/home/password/reset/${find.email}?token=${hashEmail}"> Reset </a>`);
                res.redirect('/home/password/reset?status=success');
                console.log('send email success');
            });
           
        }
        
    }
    else{
        console.log("vui long nhap- mail");
        res.render('accounts/password/email');
    }
}
module.exports.showFormResetPass=async(req,res,next)=>{
    if(!req.params.email||!req.query.token){
        res.redirect('/home/password/reset');
    }
    else{
        res.render('accounts/password/reset',{email:req.params.email,token:req.query.token});
        
    }
}
module.exports.Reset=(req,res,next)=>{
    const {email,token,password}=req.body;
    if(!email||!token||!password){
        req.redirect('/home/password/reset');
    }
    else{
        bcrypt.compare(email,token,async(err,result)=>{
            if(result==true){
                bcrypt.hash(password,parseInt(process.env.BCRYPT_HASH)).then(async(hashed)=>
                    await accountModel.findOneAndUpdate({email},{password:hashed})
                );
                res.render('accounts/login')
            }
            else{
                req.redirect('/home/password/reset');
            }
        })
    }
}