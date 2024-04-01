import { Router } from 'express';

import { validateZodSchema } from '@shared/utils/validateSchema';
import UsersController from '../controllers/UsersController';
import { createUserSchema } from '../schemas/createUserSchema';

const usersRoutes = Router();

usersRoutes
  .get('/', UsersController.index) 
  .post('/', validateZodSchema(createUserSchema), UsersController.create);

export default usersRoutes;
