const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const userSchema= new Schema({
   uid:{type:String, required:true , unique:true},
   name:{type: String, required:true},
   picture:{type: String},
   facebook:{type: String, default:"https://www.facebook.com"},
   instagram:{type: String,default:"https://www.instagram.com"},
   twitter:{type: String,default:"https://www.twitter.com"},
   // tags:[{type:String}]
})

const userModel=mongoose.model('user', userSchema)

module.exports=userModel;