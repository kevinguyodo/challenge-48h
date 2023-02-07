import User from "App/Models/User";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CreateUserValidator from "App/Validators/CreateUserValidator";
import LoginValidator from "App/Validators/LoginValidator";

export default class AuthController {
  generateJWT(id: number) {
    const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
      issuer: process.env.APP_NAME,
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    return token;
  }

  async getUser({ request, response }: HttpContextContract) {
    const user = await User.findOrFail(request.param("id"));
    return response.json(user);
  }

  async register({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CreateUserValidator);
      const user = await User.create(payload);
      const token = this.generateJWT(user.id);
      response.json(token);
    } catch (e) {
      response.json(e);
    }
  }

  async updateUser({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator);
    const getUserId = request.params();
    const user = await User.updateOrCreate({ id: getUserId.id }, payload);
    return response.json(user);
  }

  async login({ request, response }: HttpContextContract) {
    try {
      const params = await request.validate(LoginValidator);
      const user = await User.query()
        .where("email", request.body().email)
        .first();
      if (!user) {
        return;
      }
      if (await argon2.verify(user.password, params.password)) {
        response.json(user.id);
      } else {
        response.send("Pas le bon password");
      }
    } catch (e) {
      response.json(e);
    }
  }

  async deleteUser({ request, response }: HttpContextContract) {
    try {
      const user = await User.findOrFail(request.param("id"));
      await user.delete();
    } catch (e) {
      response.json(e);
    }
  }
}
