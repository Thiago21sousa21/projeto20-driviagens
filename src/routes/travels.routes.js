import {Router} from 'express'
import { schemaValidation } from '../middlewares/schema.validadete.js'
import { travelSchema } from '../schemas/schemas.js'

const travelsRoutes = Router()

travelsRoutes.post('/travels', schemaValidation(travelSchema))

export default travelsRoutes