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
    await Role.createMany([
      {
        name: "Administrateur",
      },
      {
        name: "Commercial",
      },
      {
        name: "Client",
      },
    ]);

    await CompanyCategory.createMany([
      {
        name: "Electroménager",
      },
      {
        name: "Informatique",
      },
      {
        name: "Alimentaire",
      },
      {
        name: "Textile",
      },
      {
        name: "Sport",
      },
      {
        name: "Loisir",
      },
      {
        name: "Educatif",
      },
    ]);

    await User.createMany([
      {
        name: "eleve",
        surname: "eleve",
        email: "eleve@ynov.com",
        address: "this is adresse test",
        phone_number: "06 06 06 06 06",
        password: "passwordeleve",
        role_id: 1,
      },
      {
        name: "prof",
        surname: "prof",
        email: "prof@ynov.com",
        address: "adresse_prof",
        phone_number: "06 06 06 06 06",
        password: "prof_password",
        role_id: 2,
      },
      {
        name: "administration",
        surname: "administration",
        email: "administration@ynov.com",
        address: "adresse_administration",
        phone_number: "06 06 06 06 06",
        password: "administration_password",
        role_id: 3,
      },
    ]);

    await Category.createMany([
      {
        name: "Téléphone",
      },
      {
        name: "Chaussure",
      },
      {
        name: "Vêtement",
      },
      {
        name: "Télévision",
      },
      {
        name: "Conserve",
      },
      {
        name: "Livre",
      },
      {
        name: "Vélo",
      },
    ]);

    await Cart.createMany([
      {
        client_id: 1,
      },
      {
        client_id: 2,
      },
      {
        client_id: 3,
      },
    ]);

    await Company.createMany([
      {
        name: "Decathlon",
        phone_number: "06 06 06 06 06",
        email: "decathlon@decathlon.com",
        address: "decathlon adress",
        user_id: 1,
        company_category_id: 7,
      },
      {
        name: "Huawai",
        phone_number: "06 06 06 06 06",
        email: "huawai@huawai.com",
        address: "huawai adress",
        user_id: 2,
        company_category_id: 2,
      },
    ]);

    await Product.createMany([
      {
        name: "Huawai pro",
        description: "Téléphone performant",
        price: 1000,
        category_id: 1,
        cart_id: 1,
      },
      {
        name: "Les misérables",
        description: "Très bon livre, un classique",
        price: 20,
        category_id: 6,
        cart_id: 2,
      },
      {
        name: "BMX",
        description: "Bon vélo pour débuter",
        price: 1500,
        category_id: 7,
        cart_id: 3,
      },
    ]);
  }
}
