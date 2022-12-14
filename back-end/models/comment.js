const mongoose = require('mongoose')

const commentSchema = mongoose.Schema({
    videoID: {
        type: String
    },
    userID:{
        type: mongoose.Schema.Types.ObjectId, ref: "user"
    },
    comments: {
        type: [{
            commentID: String,
            userName: String,
            description: String,
            timestamp: Number
        }],
        replies: {
            type: [{
                commentaireID: String,
                userName: String,
                description: String,
                timestamps: Number
            }]
        },
    },
    likes: [String],
    tags: [{
        commentID: String,
        userName: String,
        description: String,
        timestamps: Number
    }]

}, {
    timestamps: true,
})

module.exports = mongoose.model('comments', commentSchema)