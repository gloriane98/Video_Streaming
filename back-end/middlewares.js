const admin=require('firebase-admin');

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth()

const verifyToken=(req, res, next)=>{
    if(!req.headers.authorization){
        return res.status(401).send('No authorized')
    }
    const token= req.headers.authorization.split(' ')[1]

    auth.verifyIdToken(token).then((decoded) => {
        console.log(decoded)
        res.locals.uid = decoded.uid;
        next()
    }).catch((err) => res.status(401).json({err}))

}

module.exports={verifyToken};
