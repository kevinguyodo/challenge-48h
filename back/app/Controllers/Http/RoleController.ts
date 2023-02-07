import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Role from "App/Models/Role";

export default class RoleController {
  async getRole({ request, response }: HttpContextContract) {
    const role = await Role.findOrFail(request.param("id"));
    return response.json(role);
  }

  async getAllRole({ response }: HttpContextContract) {
    const roles = await Role.all();
    return response.json(roles);
  }
}
