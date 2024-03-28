import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import { validateZodSchema } from '@shared/utils/validateSchema';
import { createProductSchema } from '../schemas/createProductSchema';
import { updateProductSchema } from '../schemas/updateProductSchema';
import {
  deleteProductSchema,
  showProductSchema,
} from '../schemas/deleteProductSchema';

const productRoutes = Router();

productRoutes
  .get('/', ProductController.index)
  .post('/', validateZodSchema(createProductSchema), ProductController.create);

productRoutes
  .get('/:id', validateZodSchema(showProductSchema), ProductController.show)
  .put('/:id', validateZodSchema(updateProductSchema), ProductController.update)
  .delete(
    '/:id',
    validateZodSchema(deleteProductSchema),
    ProductController.delete,
  );

export default productRoutes;
