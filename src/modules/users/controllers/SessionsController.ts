import { Request, Response } from 'express';
import CreateSessionsService from '../services/CreateSessionsServices';

class SessionsController {
  async create(req: Request, res: Response) {
    const service = new CreateSessionsService();
    const session = await service.execute(req.body);
    return res.status(200).json(session);
  }
}

export default new SessionsController();
