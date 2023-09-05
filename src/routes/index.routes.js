import { Router } from "express"
import passengersRoutes from "./passengers.routes.js"

const indexRoutes = Router()

indexRoutes.use(passengersRoutes)

export default indexRoutes