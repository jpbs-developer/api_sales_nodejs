import { Router } from 'express';

import { validateZodSchema } from '@shared/utils/validateSchema';
import UsersController from '../controllers/UsersController';
import { createUserSchema } from '../schemas/createUserSchema';
import { loginSchema } from '../schemas/loginSchema';
import uploadConfig from '@config/upload';
import SessionsController from '../controllers/SessionsController';
import isAuthenticated from '@middlewares/isAuthenticated';
import UserAvatarController from '../controllers/UserAvatarController';
import multer from 'multer';

const upload = multer(uploadConfig);

const usersRoutes = Router();

usersRoutes
  .get('/', isAuthenticated, UsersController.index)
  .post(
    '/',
    validateZodSchema(createUserSchema),
    isAuthenticated,
    UsersController.create,
  )
  .post('/sessions', validateZodSchema(loginSchema), SessionsController.create)
  .patch(
    '/avatar',
    isAuthenticated,
    upload.single('avatar'),
    UserAvatarController.update,
  );

export default usersRoutes;
