import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Category from "App/Models/Category";
import Company from "App/Models/Company";
import CompanyCategory from "App/Models/CompanyCategory";
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

    const company = await Company.create({
      name: "name company",
      phone_number: "06 06 06 06 06",
      email: "test@test.com",
      address: "this is adresse",
    });

    await CompanyCategory.create({
      name: "name company category",
      company_id: company.id,
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
