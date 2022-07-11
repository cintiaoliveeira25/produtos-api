import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";

@Controller('products')
export class ProductsController {
  products: Product[] = [
    new Product("LIV01", "Livro TDD e BDD na prática", 29.90),
    new Product("LIV02", "Livro Iniciando com Flutter", 39.90),
    new Product("LIV03", "Inteligencia artificial como serviço", 29.90),
  ]

  @Get()
  getAll(): Product[] {
    return this.products;
  }

  @Get(':id')
  getOne(@Param() params): Product {
    return this.products[0];
  }

  @Post()
  create(@Body() product: Product) {
    product.id = 100;
    this.products.push(product);
  }

  @Put()
  change(@Body() product: Product) : Product {
    return product;
  }

  @Delete(':id')
  delete(@Param() params) {
    this.products.pop();
  }
}