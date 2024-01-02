import { Router } from 'express';

const appRoutes = Router();

appRoutes.get('/', (req, res) => {
  return res.json({ message: 'Welcome' });
});

export default appRoutes;
