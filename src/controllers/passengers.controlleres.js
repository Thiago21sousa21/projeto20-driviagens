import httpStatus from "http-status"
import { passsengersServices } from "../services/passengers.services.js"

export const createPassenger = async(req, res)=>{

    await passsengersServices.createPassenger(req.body)
    res.sendStatus(httpStatus.CREATED)

}

export const getPassengersAndTravels =  async(req, res)=>{
    const passengerTravel = await passsengersServices.getPassengersAndTravels(req.query)
    return res.send(passengerTravel);
}