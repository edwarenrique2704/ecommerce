import { Router } from 'express';
import { getAdvices, getAdvice, createAdvice, updateAdvice, deleteAdvice } from '../controllers/advic.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { createAdviceSchema } from '../schemas/advice.schema.js';
import { validateSchema } from '../middlewares/validator.middleware.js';


const router = Router();

router.get ('/advice', authRequired, getAdvices);
router.get ('/advice/:id', authRequired, getAdvice);
router.post ('/advice', authRequired, validateSchema (createAdviceSchema), createAdvice);
router.put ('/advice/:id', authRequired, updateAdvice);
router.delete ('/advice/:id', authRequired, deleteAdvice);

export default router;