import AppError from '@shared/errors/AppError';
import { UserDTO } from '../dtos/UserDTO';
import UserEntity from '../typeorm/entities/User';
import { usersRespository } from '../typeorm/repositories/UserRepository';
import { compare } from 'bcryptjs';
import { jwtSign } from '@config/auth';

type IResponse = {
  user: UserEntity;
  token: string;
};

export default class CreateSessionsService {
  async execute({ email, password }: UserDTO): Promise<IResponse> {
    const user = await usersRespository.findByEmail(email);

    if (!user) throw new AppError('Invalid email or password!');

    const matchPassword = await compare(password, user.password);
    if (!matchPassword) throw new AppError('Invalid email or password!');
    const payloadToken = {
      email: user.email,
      userName: user.name,
      userId: user.id,
    };

    const token = jwtSign(payloadToken, { subject: user.id, expiresIn: '1d' });

    return { user, token };
  }
}
