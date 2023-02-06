/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

// Get Method
Route.get("/me", "AuthController.me").middleware("auth");
Route.get("/user/:uuid", "UsersController.getUser");
Route.get("/product", "ProductsController.getAllProduct");
Route.get("/product/:id", "ProductsController.getProduct");
Route.get("/category", "CategoriesController.getAllCategory");
Route.get("/category/:id", "CategoriesController.getCategory");
Route.get("/company", "CompanyController.getAllCompany");
Route.get("/company/:id", "CompanyController.getCompany");

// Post Method
Route.post("/product", "ProductsController.createProduct");
Route.post("/company", "CompanyController.createCompany");

// Put Method
Route.put("/product/:id", "ProductsController.updateProduct");
Route.put("/company/:id", "CompanyController.updateCompany");
