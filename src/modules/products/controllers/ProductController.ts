import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProduct';
import ListProductsService from '../services/ListProducts';
import ShowProductService from '../services/ShowProduct';
import DeleteProductService from '../services/DeleteProduct';
import UpdateProductService from '../services/UpdateProduct';

class ProductController {
  async create(req: Request, res: Response) {
    const service = new CreateProductService();
    const product = await service.execute(req.body);
    return res
      .status(201)
      .json({ message: 'Product created successfully', data: product });
  }

  async index(req: Request, res: Response) {
    const service = new ListProductsService();
    const products = await service.execute();
    return res.status(200).json(products);
  }

  async show(req: Request, res: Response) {
    const service = new ShowProductService();
    const { id } = req.params;
    const product = await service.execute(id);
    return res.status(200).json(product);
  }

  async update(req: Request, res: Response) {
    const service = new UpdateProductService();
    const { id } = req.params;
    await service.execute(req.body, id);
    return res.status(200).json({ message: 'Product updated successfully ' });
  }

  async delete(req: Request, res: Response) {
    const service = new DeleteProductService();
    const { id } = req.params;
    await service.execute(id);
    return res.status(200).json({ message: 'Product removed successfully ' });
  }
}

export default new ProductController();
