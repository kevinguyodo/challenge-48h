import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CompanyCategory from "App/Models/CompanyCategory";
export default class CompanyCategoriesController {
  async getCompanyCategory({ request, response }: HttpContextContract) {
    const companyCategory = await CompanyCategory.findOrFail(
      request.param("id")
    );
    return response.json(companyCategory);
  }
  async getAllCompanyCategory({ response }: HttpContextContract) {
    const companyCategories = await CompanyCategory.all();
    return response.json(companyCategories);
  }
}
