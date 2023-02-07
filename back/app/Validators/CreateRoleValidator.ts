import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreateRoleValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.alpha({ allow: ["space", "dash"] }),
    ]),
  });

  public messages: CustomMessages = {
    // Lastname error message
    "nom.required": "You must provide a lastname",
    "nom.alpha": "Your lastname can only contain letters, spaces and dashes",
  };
}
