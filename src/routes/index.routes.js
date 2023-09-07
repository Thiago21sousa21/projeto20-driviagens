import { Router } from "express"
import passengersRoutes from "./passengers.routes.js"
import citiesRoutes from "./cities.routes.js"
import flightsRoutes from "./flights.routes.js"
import travelsRoutes from "./travels.routes.js"

const indexRoutes = Router()

indexRoutes.use(passengersRoutes)
indexRoutes.use(citiesRoutes)
indexRoutes.use(flightsRoutes)
indexRoutes.use(travelsRoutes)

export default indexRoutes