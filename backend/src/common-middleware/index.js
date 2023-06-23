const jwt = require("jsonwebtoken")

exports.requireSignin = (req,res,next) =>{
    const token = req.headers.authorization.split(" ")[1];

    if(req.headers.authorization){

        const user = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = user;
        
    }else{

        return res.status(400).json({ message: 'Authorization required'});
    }
    next();

}


exports.adminMiddleware = (req,res,next) => {
    if(req.user.role !== 'admin' ){
        return res.status(400).json({message:'Admin Access denied'})
    }
    next();
}
exports.superadminMiddleware = (req,res,next) => {
    if(req.user.role !== 'superadmin' ){
        return res.status(400).json({message:'SuperAdmin Access denied'})
    }
    next();
}
exports.distributorMiddleware = (req,res,next) => {
    if(req.user.role !== 'distributor' ){
        return res.status(400).json({message:'Distributor Access denied'})
    }
    next();
}