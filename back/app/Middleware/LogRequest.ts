import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class Auth {
    public async handle(
        { request }: HttpContextContract,
        next: () => Promise<void>
    ) {
        try{
            const user = await User.findOrFail(request.body())
            ctx.state.user = user
            return next()
        }catch (e) {
            ctx.unauthorized({message: e.message})
    }
}
}