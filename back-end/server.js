const app = require("./app");
const http = require("http").Server(app)
const { PORT } = require("./config/config");


const socketIO = require('socket.io')(http, {
    cors: {
        origin:`http://localhost:5173`
    }
});

const Comments = require("./models/comment");
const Likes = require("./models/like");
const Dislikes = require("./models/dislike");
const Notification = require("./models/notification");

//Add this before the app.get() block
socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  //send comments to the client
  socket.on("getComments", () => {
    Comments.find()
      .sort({ createdAt: -1 })
      .then((comment) => {
        // console.log("comments : ", comment);
        socket.emit("receiveComments", comment);
      })
      .catch((error) => socket.emit("receiveComments", error));
  });

  //get comments from the client
  socket.on("commentSend", (comment) => {
    console.log("commentaires : ", comment);
    const comments = new Comments(comment);
    comments.save().then(() => socketIO.emit("commentResponse", comment));
  });

  //send likes to the client
  socket.on("getLikes", () => {
    Likes.find()
      .sort({ createdAt: -1 })
      .then((like) => {
        // console.log("likess : ", like);
        socket.emit("receiveLikes", like);
      })
      .catch((error) => socket.emit("receiveLikes", error));
  });

  //get likes from the client
  socket.on("likeSend", (like) => {
    console.log("likes : ", like);
    const likes = new Likes(like);
    likes.save().then(() => socketIO.emit("likeResponse", like));
  });

  //send dislikes to the client
  socket.on("getDislikes", () => {
    Dislikes.find()
      .sort({ createdAt: -1 })
      .then((like) => {
        // console.log("likess : ", like);
        socket.emit("receiveDislikes", like);
      })
      .catch((error) => socket.emit("receiveDislikes", error));
  });

  //get dislikes from the client
  socket.on("dislikeSend", (like) => {
    console.log("dislikes : ", like);
    const dislikes = new Dislikes(like);
    dislikes.save().then(() => socketIO.emit("dislikeResponse", like));
  });

  //send notications to the client
  socket.on("getNotifications", () => {
    Notification.find()
      .sort({ createdAt: -1 })
      .then((notification) => {
        // console.log("likess : ", notification);
        socket.emit("receiveNotifications", notification);
      })
      .catch((error) => socket.emit("receiveNotifications", error));
  });

  //get notifications from the client
  socket.on("notificationSend", (notification) => {
    console.log("notifications : ", notification);
    const notications = new Notification(notification);
    notications
      .save()
      .then(() => socketIO.emit("notificationResponse", notification));
  });

  //Listen when user disconnecting
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

    http.listen(process.env.Port || PORT, () =>
    console.log(`Server listen on port ${PORT}`)
  );