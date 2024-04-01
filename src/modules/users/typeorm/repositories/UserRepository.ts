import AppDataSource from '@shared/typeorm/data-source';
import UserEntity from '../entities/User';

export const productRespository = AppDataSource.getRepository(
  UserEntity,
).extend({
  findByName(name: string): Promise<UserEntity | null> {
    return this.findOne({ where: { name } });
  },

  findByEmail(email: string): Promise<UserEntity | null> {
    return this.findOne({ where: { email } });
  },
});
