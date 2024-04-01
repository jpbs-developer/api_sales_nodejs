import { usersRespository } from '../typeorm/repositories/UserRepository';

export default class ListUsersService {
  async execute() {
    return await usersRespository.find();
  }
}
