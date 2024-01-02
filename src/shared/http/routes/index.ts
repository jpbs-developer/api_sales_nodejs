import productRoutes from '@modules/products/routes';
import { Router } from 'express';

const appRoutes = Router();

appRoutes.use('/products', productRoutes);

export default appRoutes;
