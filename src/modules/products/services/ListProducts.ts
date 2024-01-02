import { productRespository } from '../typeorm/repositories/productRepository';

export default class ListProductsService {
  async execute() {
    return await productRespository.find();
  }
}
