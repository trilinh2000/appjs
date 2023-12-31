const mongoose=require('mongoose');
const account=require('./account.model')
const product= new mongoose.Schema({
    productId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:"account",
    },
    name:{
        type:String,
        required:true,
    },
    title:{
        type:String
    },
    money:{
        type:String
    },
    img:{
        data: Buffer,
        contentType: String
    }
},{
    connection:"product",
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("product",product)