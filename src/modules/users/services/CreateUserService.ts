import AppError from '@shared/errors/AppError';
import { UserDTO } from '../dtos/UserDTO';
import UserEntity from '../typeorm/entities/User';
import { usersRespository } from '../typeorm/repositories/UserRepository';
import { hash } from 'bcryptjs';
import hashedPassword from '@shared/utils/hashedPassword';
import generatedHashedPassword from '@shared/utils/hashedPassword';

export default class CreateUserService {
  async execute({ name, email, password }: UserDTO): Promise<UserEntity> {
    const emailExists = await usersRespository.findByEmail(email);

    if (emailExists) throw new AppError('Email already exists');

    const hashedPassword = await generatedHashedPassword(password);

    const user = usersRespository.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRespository.save(user);

    return user;
  }
}
