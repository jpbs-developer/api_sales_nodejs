import AppError from '@shared/errors/AppError';
import { productRespository } from '../typeorm/repositories/productRepository';
import { ProductEntity } from '../typeorm/entities/Product';

export default class ShowProductService {
  async execute(id: string): Promise<ProductEntity> {
    const product = await productRespository.findOne({ where: { id } });

    if (!product) throw new AppError('Product not found');

    return product;
  }
}
