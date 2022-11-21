

const createUser=(req,res,next)=>{
    
}

const updateUser=(req,res,next)=>{

}

const findUser=(req,res,next)=>{
    const  uid  = res.locals.uid
    res.send(uid)
}

module.exports={createUser,updateUser,findUser};