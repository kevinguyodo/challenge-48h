import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import Product from "App/Models/Product";
import CreateProductValidator from "App/Validators/CreateProductValidator";

export default class ProductsController {
  async getProduct({ request, response }: HttpContextContract) {
    const product = await Product.findOrFail(request.param("id"));
    return response.json(product);
  }

  async getAllProduct({ response }: HttpContextContract) {
    const products = await Product.all();
    return response.json(products);
  }

  async createProduct({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateProductValidator);
    const product = await Product.create(payload);
    return response.json(product);
  }

  async updateProduct({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateProductValidator);
    const getProductId = request.params();
    const product = await Product.updateOrCreate(
      { id: getProductId.id },
      payload
    );
    return response.json(product);
  }
}
