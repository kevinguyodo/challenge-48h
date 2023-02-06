import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreateCompanyValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.alpha({ allow: ["space", "dash"] }),
    ]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: "companies", column: "email" }),
    ]),
    address: schema.string({ trim: true }, [
      rules.alphaNum({ allow: ["space", "dash"] }),
    ]),
    phone_number: schema.string({ trim: true }, [
      rules.alphaNum({ allow: ["space", "dash"] }),
      rules.maxLength(14),
    ]),
    // user_id: schema.number([rules.exists({ table: "users", column: "id" })]),
  });

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    // Role error message
    "role.required": "You must provide a role",
    "role.alpha": "Your role must be a word composed only of letters",

    // Firstname error message
    "firstname.required": "You must provide a firstname",
    "firstname.alpha":
      "Your firstname can only contain letters, spaces and dashes",

    // Lastname error message
    "lastname.required": "You must provide a lastname",
    "lastname.alpha":
      "Your lastname can only contain letters, spaces and dashes",

    // Username error message
    "username.required": "You must provide a username",
    "username.alphaNum":
      "Your username can only contain letters, number, dashes and underscores",

    // Email error message
    "email.required": "You must provide an email",
    "email.email": "You must provide a correct email format",
    "email.unique": "Your email must be unique",

    // Password error message
    "password.required": "You must provide a password",
    "password.minLength": "Your password is too short, minimum length is 8",

    // Phone number error message
    "phone_number.alphaNum":
      "Your phone number can only contain letters, numbers, spaces and dashes",
    "phone_number.maxLength":
      "Your phone number is too long, maximum length is 14",
  };
}
