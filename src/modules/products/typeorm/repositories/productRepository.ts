import AppDataSource from '@shared/typeorm/data-source';
import { ProductEntity } from '../entities/Product';

export const productRespository = AppDataSource.getRepository(
  ProductEntity,
).extend({
  findByName(name: string): Promise<ProductEntity | null> {
    const product = this.findOne({ where: { name } });
    return product;
  },
});
