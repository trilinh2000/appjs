module.exports.Login=(req,res,next) =>{
    if(req.session.loggedin){
        res.locals.account=req.session.account;
        res.redirect('/home');
    }
    else{
        next();
    }
}
module.exports.loggedin=(req,res,next)=>{
    if(req.session.loggedin){
        res.locals.account=req.session.account;
        next();
    }
    else{
        res.redirect('/home/logout');
    }
}