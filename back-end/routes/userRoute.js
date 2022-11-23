const express= require('express');
const routes=express.Router();
const {verifyToken}=require('../middlewares')

const {createUser, updateUserUsername, findUser,updateUserPicture} = require('../controllers/user.controller')

routes.post('/', verifyToken, createUser)
routes.get('/', verifyToken, findUser)
routes.put('/',verifyToken, updateUserUsername)
routes.put('/', verifyToken,updateUserPicture)

module.exports=routes;