import productRoutes from '@modules/products/routes';
import usersRoutes from '@modules/users/routes';
import { Router } from 'express';

const appRoutes = Router();

appRoutes.use('/products', productRoutes);
appRoutes.use('/users', usersRoutes);

export default appRoutes;
