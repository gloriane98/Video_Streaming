const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const userSchema= new Schema({
   uid:{type:String, required:true , unique:true},
   name:{type: String, required:true},
   picture:{type: String},
   facebook:{type: String},
   instagram:{type: String},
   twitter:{typr: String}
})

const userModel=mongoose.model('user', userSchema)

module.exports=userModel;