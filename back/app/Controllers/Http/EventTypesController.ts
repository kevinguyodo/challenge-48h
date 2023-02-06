import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import EventType from "App/Models/EventType";

export default class EventTypesController {
  async getEventType({ request, response }: HttpContextContract) {
    const eventType = await EventType.findOrFail(request.param("id"));
    return response.json(eventType);
  }

  async getAllEventType({ response }: HttpContextContract) {
    const eventTypes = await EventType.all();
    return response.json(eventTypes);
  }
}
