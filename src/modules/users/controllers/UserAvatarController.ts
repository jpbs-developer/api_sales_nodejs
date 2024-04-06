import { Request, Response } from 'express';
import UploadUserAvatarService from '../services/UpadateUserAvatarService';

class UserAvatarController {
  async update(req: Request, res: Response) {
    const { userId } = req.user;
    const fileName = req.file?.filename;
    console.log(fileName);
    
    const service = new UploadUserAvatarService();
    const user = await service.execute({ userId, avatar: fileName as string });
    return res
      .status(201)
      .json({ message: 'Upload completed successfully!', data: user });
  }
}

export default new UserAvatarController();
