import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import CompanyCategory from 'App/Models/CompanyCategory';
import CreateCompanyCategoryValidator from 'App/Validators/CreateCompanyCategoryValidator';
export default class CompanyCategoriesController {
    async getCompanyCategory({ request, response }: HttpContextContract) {
        const companyCategory = await CompanyCategory.findOrFail(request.param('uuid'));
        return response.json(companyCategory);
    }
    async getAllCompanyCategory({ response }: HttpContextContract) {
        const companyCategories = await CompanyCategory.all();
        return response.json(companyCategories);
    }
    async createCompanyCategory({ request, response }: HttpContextContract) {
        const payload = await request.validate(CreateCompanyCategoryValidator);
        const companyCategory = await CompanyCategory.create(payload);
        return response.json(companyCategory);
    }
    async updateCompanyCategory({ request, response }: HttpContextContract) {
        const payload = await request.validate(CreateCompanyCategoryValidator);
        const getCompanyCategoryId = request.params();
        const companyCategory = await CompanyCategory.updateOrCreate({ id: getCompanyCategoryId.id }, payload);
        return response.json(companyCategory);
    }
}