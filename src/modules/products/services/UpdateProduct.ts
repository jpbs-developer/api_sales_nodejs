import AppError from '@shared/errors/AppError';
import { ProductDTO } from '../dtos/productDTO';
import { ProductEntity } from '../typeorm/entities/Product';
import { productRespository } from '../typeorm/repositories/productRepository';

export default class UpdateProductService {
  async execute(
    { name, price, quantity }: ProductDTO,
    id: string,
  ): Promise<ProductEntity> {
    const product = await productRespository.findOne({ where: { id } });

    if (!product) throw new AppError('Product not found');
    const productExists = await productRespository.findByName(name);

    if (productExists && product.name !== name)
      throw new AppError('Product already exists');

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await productRespository.save(product);

    return product;
  }
}
