import {Router} from 'express'
import { schemaValidation } from '../middlewares/schema.validadete.js';
import { flightSchema } from '../schemas/schemas.js';
import { newFlight } from '../controllers/flights.controllers.js';

const flightsRoutes = Router()

flightsRoutes.post('/flights', schemaValidation(flightSchema), newFlight)

export default flightsRoutes;