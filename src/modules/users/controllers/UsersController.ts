import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUsersService from '../services/ListUsers';
import CreateSessionsService from '../services/CreateSessionsServices';

class UsersController {
  async create(req: Request, res: Response) {
    const service = new CreateUserService();
    const user = await service.execute(req.body);
    return res
      .status(201)
      .json({ message: 'User created successfully', data: user });
  }

  async index(req: Request, res: Response) {
    const service = new ListUsersService();
    const users = await service.execute();
    return res.status(200).json(users);
  }

  async login(req: Request, res: Response) {
    const service = new CreateSessionsService();
    const users = await service.execute(req.body);
    return res.status(200).json(users);
  }
}

export default new UsersController();
