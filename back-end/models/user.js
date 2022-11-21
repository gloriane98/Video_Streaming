const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const userSchema= new Schema({
   uid:{type: String},
   name:{type: String, required:true},
   first_name:{type: String, required:true},
   profile:{type: String},
   facebook:{type: String},
   instagram:{type: String},
   twitter:{typr: String}
})