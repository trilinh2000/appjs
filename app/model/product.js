const mongoose=require('mongoose');
const account=require('./account.model')
const product= new mongoose.Schema({
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:"account",
    },
    title:{
        type:String
    },
    money:{
        type:String
    }
},{
    connection:"product",
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("product",product)