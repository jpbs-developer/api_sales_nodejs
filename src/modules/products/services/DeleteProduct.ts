import AppError from '@shared/errors/AppError';
import { ProductEntity } from '../typeorm/entities/Product';
import { productRespository } from '../typeorm/repositories/productRepository';

export default class DeleteProductService {
  async execute(id: string): Promise<ProductEntity> {
    const product = await productRespository.findOne({ where: { id } });

    if (!product) throw new AppError('Product not found');

    return await productRespository.remove(product);
  }
}
