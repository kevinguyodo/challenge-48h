import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import City from "App/Models/City";

export default class CitiesController {
  // TODO Create validator
  async getCity({ request, response }: HttpContextContract) {
    const city = await City.findOrFail(request.param("id"));
    return response.json(city);
  }

  async getAllCity({ response }: HttpContextContract) {
    const cities = await City.all();
    return response.json(cities);
  }
}
