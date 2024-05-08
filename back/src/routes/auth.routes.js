import {Router} from 'express';
import {register,
     login,
     logout,
     profile,
    // updateUserRole,//no usados aun
   //  deleteUserRole,
     getAllUser,
     verifyToken,
     deleteUser,
     updateUserData,
     adminEditUserData
} from '../controllers/auth.controller.js';
import {authRequired} from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validate.middlewares.js';
import {loginSchema,registerSchema} from '../schemas/auth.schema.js';
import {authorizeRoles} from '../middlewares/validate.roleUser.js';
import { fileUploaded } from '../libs/express-fileupload.js';


const router = Router();

router.post('/register',validateSchema(registerSchema), register)
router.post('/login',validateSchema(loginSchema), login)
router.post('/logout', logout)
router.get('/profile',authRequired,profile)
router.get('/verify',verifyToken)
router.get('/admin/users',authRequired,authorizeRoles(["admin"]),getAllUser)
router.delete('/admin/users/:id',authRequired, authorizeRoles(["admin"]), deleteUser)
router.put('/users/',authRequired,  fileUploaded,  updateUserData)
router.put('/admin/users/:id',authRequired,   authorizeRoles(["admin"]), adminEditUserData)

export default router;