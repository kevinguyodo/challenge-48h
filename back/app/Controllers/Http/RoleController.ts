import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Role from "App/Models/Role";
import CreateRoleValidator from "App/Validators/CreateRoleValidator";

export default class RoleController {

  async getAllRole({ response }: HttpContextContract) {
    try {
      const tasks = await Role.find({})
      response.json(tasks);
      } catch (e) {
      response.json(e);
      }
  }

  async createRole({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CreateRoleValidator);
      const role = await Role.create(payload);
      response.json(role);
  } catch(e) {
      response.json(e);
  }
  }
}
