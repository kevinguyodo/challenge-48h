import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Event from "App/Models/Event";
import CreateEventValidator from "App/Validators/CreateEventValidator";

export default class EventsController {
  async getEvent({ request, response }: HttpContextContract) {
    const event = await Event.findOrFail(request.param("uuid"));
    return response.json(event);
  }

  async getAllEvent({ response }: HttpContextContract) {
    const events = await Event.all();
    return response.json(events);
  }

  async createEvent({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateEventValidator);
    const user = await Event.create(payload);
    return response.json(user);
  }

  async updateEvent({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateEventValidator);
    const getEventId = request.params();
    const place = await Event.updateOrCreate({ id: getEventId.id }, payload);
    return response.json(place);
  }
}
