import {Router} from 'express'
import { schemaValidation } from '../middlewares/schema.validadete.js'
import { travelSchema } from '../schemas/schemas.js'
import { travelControllers } from '../controllers/travels.controllers.js'

const travelsRoutes = Router()

travelsRoutes.post('/travels', schemaValidation(travelSchema), travelControllers.insertNewTravel)


export default travelsRoutes