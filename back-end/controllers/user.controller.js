const User = require("../models/user");

const createUser = (req, res, next) => {
  const { uid, name, picture } = res.locals;
  const user = new User({
    name,
    picture,
    uid,
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

const updateUserUsername = (req, res, next) => {
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

module.exports = {
  createUser,
  updateUserUsername,
  findUser,
  updateUserPicture,
};
