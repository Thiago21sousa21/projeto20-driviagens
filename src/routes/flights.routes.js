import {Router} from 'express'
import { schemaValidation } from '../middlewares/schema.validadete.js';

const flightsRoutes = Router()

flightsRoutes.post('/flights', schemaValidation, CONTROLLER-FLIGHTS)

export default flightsRoutes;