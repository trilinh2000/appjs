const express=require('express');
const app=express();
const connectDB=require('./app/config/model');
const session=require('express-session');
require('dotenv/config')
require('dotenv/config');
app.set('view engine','ejs')
app.set('views','app/views')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDB();
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:true,
    saveUninitialized:true,
}))
require('./app/router/router')(app);
app.listen(process.env.PORT_SERVER,(error)=>{
    if(error) throw error;
    console.log(`Connect server http://localhost:${process.env.PORT_SERVER}`);
})