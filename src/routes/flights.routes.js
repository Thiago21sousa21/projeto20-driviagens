import {Router} from 'express'
import { schemaValidation } from '../middlewares/schema.validadete.js';
import { flightSchema } from '../schemas/schemas.js';
import { flightsControllers } from '../controllers/flights.controllers.js';

const flightsRoutes = Router()

flightsRoutes.post('/flights', schemaValidation(flightSchema), flightsControllers.newFlight)
flightsRoutes.get('/flights', flightsControllers.getFlights)

export default flightsRoutes;