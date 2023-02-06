import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Category from "App/Models/Category";
import Product from "App/Models/Product";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const category = await Category.create({
      name: "category test",
    });

    await Product.create({
      name: "product name",
      description: "description",
      price: 1500,
      category_id: category.id,
    });
    // const user = await User.create({
    //   email: "nathan.schneider@ynov.com",
    //   firstname: "nathan",
    //   lastname: "schneider",
    //   username: "La manette",
    //   password: "Le schneid",
    //   phone_number: "06 06 06 06 06",
    //   role: "membre",
    // });
  }
}
