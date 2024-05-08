import {Router} from 'express';

import {getCategorys,getCategory,createCategory,updateCategory,deleteCategory} from '../controllers/category.controller.js'


const router = Router()

router.get("/categorys",getCategorys)
router.get("/category/:id",getCategory)
router.post("/category",createCategory)
router.put("/category/:id",updateCategory)
router.delete("/category/:id",deleteCategory)

export default  router