const Comment = require("../models/comment");
const ObjectID = require('mongoose').Types.ObjectId;
const action=require('../action/commentAction');

//create comment in database
const createComment = (req, res, next) => {
    action.createComment(
        { ...req.body },
        (data) => {
          res.status(201).json({
            message: "comment saved successfully!",
           /*  data: data, */
          });
        },
        (error) => {
          res.status(400).json({
            error: error,
          });
    
  });
};

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
//retrieve all comments
const getAllComment=(req,res,next)=>{
    Comment.find()
    .populate("userID")
    .then((comments) => {
        res.status(200).json(comments);
      })
      .catch((error) => {
        res.status(400).json({
          error: error,
        });
      });
}

module.exports = {
  createComment,
  addReply,
  getAllComment,
};
