import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class AuthController {
  async login({ request, response, auth }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");

    try {
      const token = await auth.use("api").attempt(email, password);
      return token;
    } catch {
      return response.unauthorized("Invalid credentials");
    }
  }

  async me({ auth, response }) {
    return response.json(auth.user);
  }
}
