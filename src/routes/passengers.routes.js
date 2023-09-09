import {Router} from 'express'
import { createPassenger, getPassengersAndTravels } from '../controllers/passengers.controlleres.js'
import { schemaValidation } from '../middlewares/schema.validadete.js'
import { passengerSchema } from '../schemas/schemas.js'

const passengersRoutes = Router()

passengersRoutes.post('/passengers',schemaValidation(passengerSchema) ,createPassenger)
passengersRoutes.get('/passengers/travels', getPassengersAndTravels)

export default passengersRoutes