import { Router } from 'express';

import { validateZodSchema } from '@shared/utils/validateSchema';
import { loginSchema } from '../schemas/loginSchema';
import SessionsController from '../controllers/SessionsController';

const sessionsRoutes = Router();

sessionsRoutes.post(
  '/',
  validateZodSchema(loginSchema),
  SessionsController.create,
);

export default sessionsRoutes;
