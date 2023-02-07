import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Cart from "App/Models/Cart";
import Category from "App/Models/Category";
import Company from "App/Models/Company";
import CompanyCategory from "App/Models/CompanyCategory";
import Product from "App/Models/Product";
import Role from "App/Models/Role";
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const role = await Role.create({
      name: "role name",
    });

    const companyCategory = await CompanyCategory.create({
      name: "name company category",
    });

    const user = await User.create({
      name: "user name",
      surname: "user surname",
      email: "test@test.com",
      address: "this is adresse test",
      phone_number: "06 06 06 06 06",
      password: " ",
      role_id: role.id,
    });

    const category = await Category.create({
      name: "category test",
    });

    const cart = await Cart.create({
      client_id: user.id,
    });

    await Company.create({
      name: "name company",
      phone_number: "06 06 06 06 06",
      email: "test@test.com",
      address: "this is adresse",
      user_id: user.id,
      company_category_id: companyCategory.id,
    });

    await Product.create({
      name: "product name1",
      description: "description1",
      price: 1501,
      category_id: category.id,
      cart_id: cart.id,
    });

    await Product.create({
      name: "product name2",
      description: "description2",
      price: 1502,
      category_id: category.id,
      cart_id: cart.id,
    });

    await Product.create({
      name: "product name3",
      description: "description3",
      price: 1503,
      category_id: category.id,
      cart_id: cart.id,
    });

    await Product.create({
      name: "product name4",
      description: "description4",
      price: 1504,
      category_id: category.id,
      cart_id: cart.id,
    });

    await Product.create({
      name: "product name5",
      description: "description5",
      price: 1505,
      category_id: category.id,
      cart_id: cart.id,
    });

    await Product.create({
      name: "product name6",
      description: "description6",
      price: 1506,
      category_id: category.id,
      cart_id: cart.id,
    });

    await Product.create({
      name: "product name7",
      description: "description7",
      price: 1507,
      category_id: category.id,
      cart_id: cart.id,
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
