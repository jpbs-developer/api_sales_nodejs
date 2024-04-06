import fs from 'fs';
import UserEntity from '../typeorm/entities/User';
import { usersRespository } from '../typeorm/repositories/UserRepository';
import path from 'path';
import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';

interface IResquest {
  userId: string;
  avatar: string;
}

export default class UploadUserAvatarService {
  async execute({ userId, avatar }: IResquest): Promise<UserEntity> {
    const user = await usersRespository.findOne({ where: { id: userId } });
    if (!user) throw new AppError('User not found');
    if (user?.avatar) {
      const avatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(avatarFilePath);
      if (userAvatarFileExists) {
        await fs.promises.unlink(avatarFilePath);
      }
    }

    user.avatar = avatar as string;
    return await usersRespository.save(user);
  }
}
