const User = require("../models/user");

const createUser = (req, res, next) => {
  const { uid, userName, picture } = res.locals;
  const user = new User({
    uid,
    userName,
    picture,
    ...req.body,
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

const updateUser = (req, res) => {
  /* const user = new User({
    _id: req.params.id,
    userName: req.body.userName,
    picture: req.body.picture,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
  });
  User.updateOne({ _id: req.params.id }, user)
    .then(() => {
      res.status(201).json({
        message: "User updated successfully",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    }); */
  const userId = req.params.id;
  const { userName, picture, facebook, instagram } = req.body;
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }
  User.findOneAndUpdate(
    userId,
    {
      userName: userName,
      picture: picture,
      facebook: facebook,
      instagram: instagram,
    },
    { new: true, returnOriginal: false }
  )
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `Can not update user with ${uid}.May be user not found `,
          });
      } else {
        res.status(200).send(data);
      }
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  createUser,
  findUser,
  updateUser,
};
