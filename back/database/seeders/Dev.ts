import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import City from "App/Models/City";
import District from "App/Models/District";
import EventType from "App/Models/EventType";
import Place from "App/Models/Place";
import User from "App/Models/User";
import Event from "App/Models/Event";
import Comment from "App/Models/Comment";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const city = await City.create({
      name: "Nantes",
      zip_code: "44000",
    });
    const district = await District.create({
      name: "Beaulieu",
      city_id: city.id,
    });

    const place = await Place.create({
      latitude: "47.2057128",
      longitude: "-1.5374513",
      road_name: "Rue Gaëtan Rondeau",
      district_id: district.id,
    });

    const user = await User.create({
      email: "nathan.schneider@ynov.com",
      firstname: "nathan",
      lastname: "schneider",
      username: "La manette",
      password: "Le schneid",
      phone_number: "06 06 06 06 06",
      role: "membre",
    });

    const eventType = await EventType.create({
      name: "Agression couteau",
      duration: 120,
    });

    const event = await Event.create({
      description: "Il s'est fait aggresser devant son école",
      place_id: place.id,
      event_type_id: eventType.id,
      user_id: user.id,
    });

    await Comment.create({
      content: "Oui ceci est un test",
      event_id: event.id,
      author_id: user.id,
    });
  }
}
