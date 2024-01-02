import { ProductDTO } from '../dtos/productDTO';
import { productRespository } from '../typeorm/repositories/productRepository';
import AppError from '@shared/errors/AppError';
import { ProductEntity } from '../typeorm/entities/Product';

export default class CreateProductService {
  async execute({ name, price, quantity }: ProductDTO): Promise<ProductEntity> {
    const productExists = await productRespository.findByName(name);

    if (productExists) throw new AppError('Product already exists');

    const product = productRespository.create({
      name,
      price,
      quantity,
    });

    await productRespository.save(product);

    return product;
  }
}
