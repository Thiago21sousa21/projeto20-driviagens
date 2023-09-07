import { passsengersServices } from "../services/passengers.services.js"

export const createPassenger = async(req, res)=>{
    try {
        const result =  await passsengersServices.createPassenger(req.body)
        console.log('voltei pro controller', result)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}