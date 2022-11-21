const express= require('express');
const app = express();
const mongoose= require('./config/db')

const RoutesUser= require('./routes/userRoute')

mongoose;
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(express.json());
app.use('/user',RoutesUser);



module.exports= app;