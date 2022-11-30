const express=require('express');
const routes=express.Router();

const {
    createComment,
    updateComment,
    deleteComment}=require('../controllers/comment.controller')

    routes.post('/', createComment)
    // routes.put('/',updateComment)
    // routes.delete('/', deleteComment)

    module.exports=routes;