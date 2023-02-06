import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Place from "App/Models/Place";
import CreatePlaceValidator from "App/Validators/CreatePlaceValidator";

export default class PlacesController {
  async getPlace({ request, response }: HttpContextContract) {
    const place = await Place.findOrFail(request.param("id"));
    return response.json(place);
  }

  async getAllPlace({ response }: HttpContextContract) {
    const places = await Place.all();
    return response.json(places);
  }

  async createPlace({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreatePlaceValidator);
    const place = await Place.create(payload);
    return response.json(place);
  }

  async updatePlace({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreatePlaceValidator);
    const getPlaceId = request.params();
    const place = await Place.updateOrCreate({ id: getPlaceId.id }, payload);
    return response.json(place);
  }
}
