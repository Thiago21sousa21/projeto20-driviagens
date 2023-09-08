import httpStatus from "http-status"
import { passsengersServices } from "../services/passengers.services.js"

export const createPassenger = async(req, res)=>{

    await passsengersServices.createPassenger(req.body)
    res.sendStatus(httpStatus.CREATED)

}