import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private productsModel: typeof Product
    ) {}

  async getAll(): Promise<Product[]> {
    return this.productsModel.findAll();
  }

  async getOne(id: number): Promise<Product> {
    return this.productsModel.findByPk(id);
  }

  async create(product: Product) {
    this.productsModel.create(product);
  }

  async change(product: Product) : Promise<[number, Product[]]> {
    return this.productsModel.update(product, {
      where: {
        id: product.id
      }
    });
  }

  async delete(id: number) {
    const product: Product = await this.getOne(id);
    product.destroy();
  }

}