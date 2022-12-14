const User = require("../models/user");

const createUser = (req, res, next) => {
  const { uid, name, picture } = res.locals;
  const user = new User({
    uid,
    name,
    picture,
    ...req.body
  });
  user
    .save()
    .then(() => res.status(201).json({ message: "success" }))
    .catch((error) => {
      if (error?.code === 11000) {
        res
          .status(409)
          .json({ error: { message: "Utilisateur déjà existant" } });
      } else {
        res.status(400).json({ error });
      }
    });
};

const findUser = (req, res, next) => {
  const uid = res.locals.uid;
  User.findOne({ uid })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
};

const updateUser= async(req,res)=>{
  // const uid = res.locals.uid;
  const _id=req.params.id;
  const {name,picture, facebook, instagram, twitter} = req.body;
  if(!req.body){
    return res
    .status(400)
    .send({message:"Data to update can not be empty"})
  }
  User.findOneAndUpdate(
    _id, 
    {
      name:name,
      picture:picture,
      facebook:facebook,
      instagram:instagram,
      twitter:twitter}, 
    {new:true,returnOriginal: false }, )
  .then(data =>{
    if(!data){
      res.status(404)
      .send({message:`Can not update user with ${uid}.May be user not found `})
    }else{
      res.status(200).send(data)
      console.log(data)
    }
  })
  .catch(err=>{
    console.log(err)
  })
}


/* const updateUserUsername = (req, res, next) => {
  User.findOneAndUpdate({ uid }, { name: req.locals.name })
    .then(() => res.status(200).json({ message: "modify!" }))
    .catch((error) => res.status(400).json({ error }));
};
const updateUserPicture = (req, res) => {
  User.findOneAndUpdate({ uid }, { picture: req.locals.picture })
    .then(() => res.status(200).json({ message: "modify!" }))
    .catch((error) => res.status(400).json({ error }));
};
const updateFacebook = (req, res) => {
  User.findOneAndUpdate({ uid }, { facebook: req.body.facebook })
    .then(() => res.status(200).json({ message: "modify!" }))
    .catch((error) => res.status(400).json({ error }));
};
const updateInstagram = (req, res) => {
  User.findOneAndUpdate({ uid }, { instagram: req.body.instagram })
    .then(() => res.status(200).json({ message: "modify!" }))
    .catch((error) => res.status(400).json({ error }));
};
 */
module.exports = {
  createUser,
  findUser,
  updateUser
  // updateUserUsername,
  // updateUserPicture,
  
};
