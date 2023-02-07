import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Cart from "App/Models/Cart";
import CreateCartValidator from "App/Validators/CreateCartValidator";

export default class CartsController {
  async getCart({ request, response }: HttpContextContract) {
    const cart = await Cart.findOrFail(request.param("id"));
    return response.json(cart);
  }

  async getAllCart({ response }: HttpContextContract) {
    const carts = await Cart.all();
    return response.json(carts);
  }

  async createCart({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateCartValidator);
    const cart = await Cart.create(payload);
    return response.json(cart);
  }

  async updateCart({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateCartValidator);
    const getCartId = request.params();
    const cart = await Cart.updateOrCreate({ id: getCartId.id }, payload);
    return response.json(cart);
  }
}
