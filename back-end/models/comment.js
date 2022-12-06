const mongoose=require('mongoose')

const Schema=mongoose.Schema;

const commentSchema=new Schema({
    userId:{
        type:String
    },
    videoId:{type:String, required:true,
         unique:true
        },
    description:{type:String},
    replies:[{
        id:Number,
        description:String,
        type:String
    },{
        timestamps:true
    }],
    likeCount:{
        type:Number,
        default:0
    },
    dislikeCount:[{
        type:Number,
        default:0
    }],

},{
    timestamps:true
})

const commentModel = mongoose.model('comments', commentSchema)

module.exports= commentModel;
