const mongoose=require('mongoose');
const product= new mongoose.Schema({
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