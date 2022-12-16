const Comment = require("../models/comment");
const ObjectID = require('mongoose').Types.ObjectId;

//create comment in database
const createComment = (data, funReussi, funReussiError) => {
  const postComment = new Comment({...data});
    console.log(data);
    postComment
      .save()
      .then((comment) => funReussi(comment))
      .catch((error) => funReussiError(error));
};

//retrieve all comments
const getAllComment=(req,res,next)=>{
    Comment.find()
    .then((comments) => {
        res.status(200).json(comments);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
}

//add Replies
const addReply=async(req,res,next)=>{
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send('ID inconnu : ' + req.params.id)
    } else {
        try {
            return Comment.findByIdAndUpdate(
                    req.params.id, {
                        $push: {
                            replies: {
                                description:req.body.description,
                                userName:req.body.userName,
                                timestamps:new Date()
                              },
                        }
                    }, { new: true }
                )
                .then((docs) => {
                    res.status(201).send({
                        message: 'reply add on success',
                        data: docs
                    }),
                    console.log(docs)
                })
                .catch((err) => { return res.status(400).send({ message: err }),
                console.log(err)
             })
        } catch (err) {
            return res.status(400).send({ message: err }),
            console.log(err)
        }
    }
}
module.exports = {
  createComment,
  addReply,
  getAllComment,
};
