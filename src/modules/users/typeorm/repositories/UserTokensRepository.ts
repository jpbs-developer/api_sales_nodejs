import AppDataSource from '@shared/typeorm/data-source';
import { UserToken } from '../entities/UserTokens';

export const usersTokensRespository = AppDataSource.getRepository(
  UserToken,
).extend({
  findByToken(token: string): Promise<UserToken | null> {
    return this.findOne({ where: { token } });
  },

  async generate(user_id: string): Promise<UserToken | null> {
    const userToken = this.create({
      user_id,
    });

    await this.save(userToken);

    return userToken;
  },
});
