import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    
    const user = await User.create({
      email: "nathan.schneider@ynov.com",
      prenom: "nathan",
      nom: "schneider",
      password: "Le schneid"
    });
  }
}
