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

const CommentRoutes = require("./routes/commentRoute");
app.use("/api/comments", CommentRoutes);

module.exports = app;
