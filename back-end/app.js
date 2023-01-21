const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const mongoose = require("./config/db");

const RoutesUser = require("./routes/userRoute");
app.use("/user", RoutesUser);

// Comments 
const commentRoute = require("./routes/comments");
const likeRoute = require("./routes/likes");
const dislikeRoute = require("./routes/dislikes");
const notificationRoute = require("./routes/notifications");

app.use("/api/comment", commentRoute);
app.use("/api/like", likeRoute);
app.use("/api/dislike", dislikeRoute);
app.use("/api/notification", notificationRoute);

module.exports = app;
