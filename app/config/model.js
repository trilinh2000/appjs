const mongoose=require('mongoose');
module.exports=ConnectDb=async() =>{
    try{
        await mongoose.connect('mongodb+srv://root:khanh@cluster0.ond7qez.mongodb.net/mydb?retryWrites=true&w=majority');
        console.log('connect database');
    }
    catch(error){
        console.log(error);
    }
}