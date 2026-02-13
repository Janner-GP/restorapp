import { Router } from 'express';
import * as productController from '../controllers/products.controller.js';

const router = Router();

router.get('/', productController.getAll);
router.post('/', productController.create);
router.delete('/:id', productController.remove);

export default router;
