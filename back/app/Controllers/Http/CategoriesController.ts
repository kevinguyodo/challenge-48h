import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from "App/Models/Category";

export default class CategoriesController {
    async getCategory({ request, response }: HttpContextContract){
        const category = await Category.findOrFail(request.param("id"));
        return response.json(category);  
    }

    async getAllCategory({ response }: HttpContextContract) {
        const categories = await Category.all();
        return response.json(categories);
    }

}
