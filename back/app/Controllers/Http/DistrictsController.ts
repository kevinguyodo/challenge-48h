import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import District from "App/Models/District";

export default class DistrictsController {
  async getDistrict({ request, response }: HttpContextContract) {
    const district = await District.findOrFail(request.param("id"));
    return response.json(district);
  }

  async getAllDistrict({ response }: HttpContextContract) {
    const districts = await District.all();
    return response.json(districts);
  }
}
