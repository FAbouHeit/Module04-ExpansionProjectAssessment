export const verifyRole = (array)=>{
    return (req,res,next)=>{
        if(array.includes(req.role)){
            next();
        }
        else {
            return errorHandler(403,'You are not authorized!');
        }
    }
}
   

