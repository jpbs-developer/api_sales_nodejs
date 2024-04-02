import productRoutes from '@modules/products/routes';
import sessionsRoutes from '@modules/users/routes/sessions.routes';
import usersRoutes from '@modules/users/routes/users.routes';

import { Router } from 'express';

const appRoutes = Router();

appRoutes.use('/products', productRoutes);
appRoutes.use('/users', usersRoutes);
appRoutes.use('/sessions', sessionsRoutes);

export default appRoutes;
