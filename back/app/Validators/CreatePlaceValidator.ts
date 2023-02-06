import { schema, rules, CustomMessages } from "@ioc:Adonis/Core/Validator";
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class CreatePlaceValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    latitude: schema.string({ trim: true }, [
      rules.maxLength(255),
      rules.minLength(5),
    ]),
    longitude: schema.string({ trim: true }, [
      rules.maxLength(255),
      rules.minLength(5),
    ]),
    road_name: schema.string({ trim: true }, [
      rules.maxLength(255),
      rules.minLength(5),
    ]),
    district_id: schema.number([
      rules.exists({ table: "districts", column: "id" }),
    ]),
  });

  public messages: CustomMessages = {
    // latitude error message
    "latitude.required": "You must provide a description",
    "latitude.minLength": "Your description is too short, minimum length is 5",
    "latitude.maxLength": "Your description is too long, maximum length is 255",

    // longitude error message
    "longitude.required": "You must provide a description",
    "longitude.minLength": "Your description is too short, minimum length is 5",
    "longitude.maxLength":
      "Your description is too long, maximum length is 255",
    // road_name error message
    "road_name.required": "You must provide a description",
    "road_name.minLength": "Your description is too short, minimum length is 5",
    "road_name.maxLength":
      "Your description is too long, maximum length is 255",

    // road_name error message
    "district_id.required": "You must provide a place",
    "district_id.exists": "You have entered a wrong place",
  };
}
