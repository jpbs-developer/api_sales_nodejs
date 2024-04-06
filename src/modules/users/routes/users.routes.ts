import { Router } from 'express';

import { validateZodSchema } from '@shared/utils/validateSchema';
import UsersController from '../controllers/UsersController';
import { createUserSchema } from '../schemas/createUserSchema';
import { loginSchema } from '../schemas/loginSchema';
import SessionsController from '../controllers/SessionsController';
import isAuthenticated from '@middlewares/isAuthenticated';

const usersRoutes = Router();

usersRoutes
  .get('/', isAuthenticated, UsersController.index)
  .post(
    '/',
    validateZodSchema(createUserSchema),
    isAuthenticated,
    UsersController.create,
  )
  .post('/sessions', validateZodSchema(loginSchema), SessionsController.create);

export default usersRoutes;
