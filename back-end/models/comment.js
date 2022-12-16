const mongoose = require("mongoose");

const ReplySchema = mongoose.Schema({
        commentID: String,
        userName: String,
        description: String,
        userID: {type: mongoose.Schema.Types.ObjectId,ref:"user"},
        timestamps: Number,
});

const commentSchema = mongoose.Schema(
  {
    videoID: {type:String},
    description:  {type:String},
    userName:{type:String},
    userID: {type: mongoose.Schema.Types.ObjectId,ref: "user"},
    replies:[ReplySchema],
    timestamps: Number,
    likes: [{
        count: {type:String}
    }],
    tags: [
      {
        commentID: String,
        userTagsName: String,
        textCommented: String,
        videoID:String,
        timestamps: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comments", commentSchema);
