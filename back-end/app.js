const express= require('express');
const app = express();
const mongoose= require('./config/db')
const upload=require('./profile/multer')
const cloudinary=require('./profile/cloudinary')
const fs= require('fs')

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

app.use('/upload-image', upload.array('image'), async(req, res)=>{
    const uploader=async (path) => cloudinary.uploads(path, "Images");

    if(req.method === "POST"){
        const urls= []
        const files = req.files;
        for (const file of files){
            const {path}= file;
            const newPath= await uploader(path)

            urls.push(newPath)
            fs.unlinkSync(path)
        }

        res.status(200).json({
            message:"images uploaded successfully",
            data:urls
        })
    }else{
        res.status(405).json({
            err: `${req.method} method not allowed`
        })
    }
})



module.exports= app;
