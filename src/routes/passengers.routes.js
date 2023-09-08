import {Router} from 'express'
import { createPassenger } from '../controllers/passengers.controlleres.js'
import { schemaValidation } from '../middlewares/schema.validadete.js'
import { passengerSchema } from '../schemas/schemas.js'

const passengersRoutes = Router()

passengersRoutes.post('/passengers',schemaValidation(passengerSchema) ,createPassenger)

export default passengersRoutes