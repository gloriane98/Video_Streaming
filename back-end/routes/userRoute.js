const express= require('express');
const routes=express.Router();
const {verifyToken}=require('../middlewares')

const {createUser, updateUser, findUser} = require('../controllers/user.controller')

routes.post('/', verifyToken, createUser)
routes.get('/', verifyToken, findUser)
routes.put('/',verifyToken, updateUser)

module.exports=routes;