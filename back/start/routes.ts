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
Route.get("/city", "CitiesController.getAllCity");
Route.get("/city/:id", "CitiesController.getCity");
Route.get("/district", "DistrictsController.getAllDistrict");
Route.get("/district/:id", "DistrictsController.getDistrict");
Route.get("/place", "PlacesController.getAllPlace");
Route.get("/place/:id", "PlacesController.getPlace");
Route.get("/event-type", "EventTypesController.getAllEventType");
Route.get("/event-type/:id", "EventTypesController.getEventType");
Route.get("/event", "EventsController.getAllEvent");
Route.get("/event/:uuid", "EventsController.getEvent");
Route.get("/comment/:userId", "CommentsController.getComment");
Route.get("/comment", "CommentsController.getAllComment");

// Post Method
Route.post("/login", "AuthController.login");
Route.post("/user", "UsersController.createUser");
Route.post("/event", "EventsController.createEvent");
Route.post("/place", "PlacesController.createPlace");
Route.post("/comment", "CommentsController.createComment");

// Put Method
Route.put("/place/:id", "PlacesController.updatePlace");
Route.put("/event/:id", "EventsController.updateEvent");
Route.put("/user/:id", "UsersController.updateUser");
Route.put("/comment/:id", "CommentsController.updateComment");
// TODO Should we instantiate a put method for the login to reset the authentication token
