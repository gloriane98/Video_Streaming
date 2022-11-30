const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const commentSchema=new Schema({
    // uid:{type:String, required:true, unique:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    },
    videoId:{type:String, required:true,
        //  unique:true
        },
    description:{type:String},
    likes:[],
    dislikes:[],

},{
    timestamps:true
})

const commentModel = mongoose.model('comments', commentSchema)

module.exports= commentModel;
