import { schema, CustomMessages, rules } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreateCommentValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    content: schema.string({ trim: true }, [
      rules.maxLength(255),
      rules.minLength(5),
    ]),

    event_id: schema.number([rules.exists({ table: "events", column: "id" })]),

    author_id: schema.number([rules.exists({ table: "users", column: "id" })]),
  });

  public messages: CustomMessages = {
    // content error message
    "content.required": "You must provide a description",
    "content.minLength": "Your description is too short, minimum length is 5",
    "content.maxLength": "Your description is too long, maximum length is 255",

    // event_id error message
    "event_id.required": "You must provide a place",
    "event_id.exists": "You have entered a wrong place",

    // author_id error message
    "author_id.required": "You must provide a place",
    "author_id.exists": "You have entered a wrong place",
  };
}
