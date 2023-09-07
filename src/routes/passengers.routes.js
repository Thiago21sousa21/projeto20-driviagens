import {Router} from 'express'
import { createPassenger } from '../controllers/passengers.controlleres.js'

const passengersRoutes = Router()

passengersRoutes.post('/passengers', createPassenger)

export default passengersRoutes