import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productRoutes = Router();

productRoutes
  .get('/', ProductController.index)
  .post('/', ProductController.create);

productRoutes
  .get('/:id', ProductController.show)
  .put('/:id', ProductController.update)
  .delete('/:id', ProductController.delete);

export default productRoutes;
