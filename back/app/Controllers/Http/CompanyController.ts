import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Company from "App/Models/Company";
import CreateCompanyValidator from "App/Validators/CreateCompanyValidator";

export default class CompanyController {
  async getCompany({ request, response }: HttpContextContract) {
    const company = await Company.findOrFail(request.param("id"));
    return response.json(company);
  }

  async getAllCompany({ response }: HttpContextContract) {
    const companies = await Company.all();
    return response.json(companies);
  }

  async createCompany({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateCompanyValidator);
    const company = await Company.create(payload);
    return response.json(company);
  }

  async updateCompany({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateCompanyValidator);
    const getCompanyId = request.params();
    const company = await Company.updateOrCreate(
      { id: getCompanyId.id },
      payload
    );
    return response.json(company);
  }
}
