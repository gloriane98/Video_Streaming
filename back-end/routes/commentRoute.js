const router = require("express").Router();

const { createComment,getAllComment } = require("../controllers/comment.controller");

router.post("/create", createComment);
router.get("/",getAllComment);

module.exports = router;
