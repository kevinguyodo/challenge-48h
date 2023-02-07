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
Route.get("/product", "ProductsController.getAllProduct");
Route.get("/product/:id", "ProductsController.getProduct");
Route.get(
  "/category-company/:id",
  "CompanyCategoriesController.getCompanyCategory"
);
Route.get(
  "/category-company",
  "CompanyCategoriesController.getAllCompanyCategory"
);
Route.get("/category", "CategoriesController.getAllCategory");
Route.get("/category/:id", "CategoriesController.getCategory");
Route.get("/company", "CompanyController.getAllCompany");
Route.get("/company/:id", "CompanyController.getCompany");
Route.get("/carts", "CartsController.getAllCart");
Route.get("/carts/:id", "CartsController.getCart");
Route.get("/user/:id", "AuthController.getUser");
Route.get("/role", "RoleController.getAllRole");
Route.get("/role/:id", "RoleController.getRole");

// Post Method
Route.post("/product", "ProductsController.createProduct");
Route.post("/company", "CompanyController.createCompany");
Route.post("/carts", "CartsController.createCart");
Route.post("/user", "AuthController.register");
Route.post("/login", "AuthController.login");

// Put Method
Route.put("/product/:id", "ProductsController.updateProduct");
Route.put("/company/:id", "CompanyController.updateCompany");
Route.put("/cart/:id", "CartsController.updateCart");
Route.put("/user/:id", "AuthController.updateUser");
