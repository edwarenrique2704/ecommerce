import User from '../models/user.model.js';

export const authorizeRoles = (roles) =>async(req,res,next)=> {
    
      // if (!roles.includes(req.user.role))
      
      // return res.status(401).json({message:`Role: ${req.user.role} is not allowed to access this resouce `})
       
      //   req.user.roles = roles
      //     next();
      try {


     
        const userData = await User.findById(req.user.id)
        if(!userData) res.status(400).json({message: "Usuario no encontrado"});
 
         if(userData && [].concat(roles).includes(userData.role)){
             next()
      } 
      else{
          res.status(409)
             res.send({error: 'No cuentas con permisos de administrador'})
      }
 
 
         
 
 
  
     
     
      } catch (error) {
 
         console.log(error)
         res.status(409)
             res.send(error)
    };
  }
  