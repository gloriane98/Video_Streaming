const express = require("express");

const route = express.Router();

const { imageUpload } = require("../controllers/upload-image.controller");

route.post("/", imageUpload);

module.exports = route;
