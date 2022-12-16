const app = require("./app");
const http = require("http").Server(app)
const { PORT } = require("./config/config");
const action=require("./action/commentAction")
// const server = http.createServer(app);

const socketIO = require('socket.io')(http, {
    cors: {
        origin:`http://localhost:5173`
    }
});

//Add this before the app.get() block
socketIO.on("connection", (socket) => {
    console.log(`:haute_tension:: ${socket.id} user just connected!`);
    socket.on("sendComment", (data) => {
      action.createComment(
        data,
        (data) => {
          console.log("data", data);
          socketIO.emit("sendComment", data);
        },
        (error) => {}
      );
      socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
      });
    });
});

    http.listen(process.env.Port || PORT, () =>
    console.log(`Server listen on port ${PORT}`)
  );