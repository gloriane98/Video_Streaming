const express= require('express');
const routes=express.Router();
const {verifyToken}=require('../middlewares')

const {
    createUser, 
    updateUserUsername, 
    findUser,
    updateUserPicture,
    updateUser} = require('../controllers/user.controller')

routes.post('/', verifyToken, createUser)
routes.get('/', verifyToken, findUser)
routes.put('/update/:id',verifyToken, updateUser)

module.exports=routes;