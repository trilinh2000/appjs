const mongoose=require('mongoose');
const accountSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,//bat buoc ton tai k dc phep null
        unique:true,//k duoc trung nhau
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
    },
    role:{
        type:String,
        default:"user",
    }
},{
    connection:"account",
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("account",accountSchema);