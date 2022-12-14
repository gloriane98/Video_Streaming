const router = require('express').Router()

const postModel = require('../controllers/comment.controller')

router.get('/', postModel.readPost);
router.post('/', postModel.getPostByVideoId)
router.patch('/likeVideo/:id', postModel.likePost)
router.patch('/unLikeVideo/:id', postModel.unlikePost)
router.post('/commentSousComment/', postModel.replyPost)
router.patch('/comment-post/:id', postModel.addComment)

module.exports = router