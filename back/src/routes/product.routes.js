import {Router} from 'express';

import {getProducts,getProduct,newProduct,updateProduct,deleteProduct} from '../controllers/product.controller.js';
import {authRequired} from '../middlewares/validateToken.js';
import {authorizeRoles} from '../middlewares/validate.roleUser.js';
import { fileUploaded } from '../libs/express-fileupload.js';

const router = Router()

router.get("/products/", getProducts)
router.get("/product/:id",  getProduct)
router.post("/product/", authRequired,  authorizeRoles(["admin"]), fileUploaded, newProduct)
router.put("/product/:id",  authRequired, authorizeRoles(["admin"]), fileUploaded, updateProduct)
router.delete("/product/:id", deleteProduct)

export default  router