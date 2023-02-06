import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreateEventValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    description: schema.string({ trim: true }, [
      rules.maxLength(255),
      rules.minLength(5),
    ]),
    place_id: schema.number([rules.exists({ table: "places", column: "id" })]),
    event_type_id: schema.number([
      rules.exists({ table: "event_types", column: "id" }),
    ]),
    user_id: schema.number([rules.exists({ table: "users", column: "id" })]),
  });

  public messages: CustomMessages = {
    // Description error message
    "description.required": "You must provide a description",
    "description.minLength":
      "Your description is too short, minimum length is 5",
    "description.maxLength":
      "Your description is too long, maximum length is 255",

    // Place error message
    "place_id.required": "You must provide a place",
    "place_id.exists": "You have entered a wrong place",

    // Event type error message
    "event_type_id.required": "You must provide an event type",
    "event_type_id.exists": "You have entered a wrong event type",

    // User error message
    "user_id.required": "You must provide an user",
    "user_id.exists": "You have entered a wrong user",
  };
}
