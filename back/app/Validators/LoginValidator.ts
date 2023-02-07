import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

    export default class LoginValidator {
    constructor(protected ctx: HttpContextContract) {}

    public schema = schema.create({
        email: schema.string({ trim: true }, [
        rules.email(),
        ]),
        password: schema.string({ trim: true }, [rules.minLength(8)])
    });

    public messages: CustomMessages = {
        // Email error message
        "email.required": "You must provide an email",
        "email.email": "You must provide a correct email format",
        "email.unique": "Your email must be unique",

        // Password error message
        "password.required": "You must provide a password",
        "password.minLength": "Your password is too short, minimum length is 8"
    };
}
