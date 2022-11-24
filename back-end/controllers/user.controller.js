const User = require('../models/user')

const createUser=(req,res,next)=>{
    const  {uid, name, picture}  = res.locals;
    const user = new User({
        // ...req.body,
        name,
        picture, 
        uid,
    })
    user.save()
    .then(()=> res.status(201).json({message:"success"}))
    .catch(err => res.status(400).json({err}))
}

const updateUserUsername=(req,res,next)=>{
    User.findOneAndUpdate({ uid }, { name: req.body.name })
    .then(()=> res.status(200).json({message : "modify!"}))
    .catch(error => res.status(400).json({error}));
}
const updateUserPicture=(req, res)=>{
    User.findOneAndUpdate({uid}, {picture : req.body.picture})
    .then(()=> res.status(200).json({message : "modify!"}))
    .catch(error => res.status(400).json({error}));
}
const updateFacebook=(req, res)=>{
    User.findOneAndUpdate({uid}, {facebook : req.body.facebook})
    .then(()=> res.status(200).json({message : "modify!"}))
    .catch(error => res.status(400).json({error}));
}
const updateInstagram=(req, res)=>{
    User.findOneAndUpdate({uid}, {instagram : req.body.instagram})
    .then(()=> res.status(200).json({message : "modify!"}))
    .catch(error => res.status(400).json({error}));
}

const findUser=(req,res,next)=>{
    const  uid  = res.locals.uid
    User.findOne({uid})
    .then(user => res.status(201).json(user))
    .catch(error => res.status(404).json({error}));
}

module.exports={createUser,updateUserUsername,findUser,updateUserPicture};