import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
  products: Product[] = [
    new Product("LIV01", "Livro TDD e BDD na prática", 29.90),
    new Product("LIV02", "Livro Iniciando com Flutter", 39.90),
    new Product("LIV03", "Inteligencia artificial como serviço", 29.90),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: number): Product {
    return this.products[0];
  }

  create(product: Product) {
    this.products.push(product);
  }

  change(product: Product) : Product {
    return product;
  }

  delete(id: number) {
    this.products.pop();
  }

}