const Comment=require('../models/comment');

const createComment= async(req,res,next)=>{
    const comment= new Comment({
        ...req.body
    })
    comment
    .save()
    .then(() => 
    console.log(),
    // res.status(201).json({ message: "success" })
    res.status(201).json({message:""})

    )
    .catch((error)=> res.status(400).json({ error }))
};

const updateComment= async(req,res, next)=>{
    return req.body;
};

const deleteComment=async(req,res,next)=>{
    return {}
}

module.exports={createComment,updateComment,deleteComment}