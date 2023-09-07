import { Router } from "express";
import { citySchema } from "../schemas/schemas.js";
import { schemaValidation } from "../middlewares/schema.validadete.js";
import { createCity } from "../controllers/cities.controllers.js";

const citiesRoutes = Router()

citiesRoutes.post('/cities',schemaValidation(citySchema) , createCity)

export default citiesRoutes