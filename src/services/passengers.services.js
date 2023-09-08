import { passengerRepository } from "../repositories/passengers.repositories.js"
import errorsList from "../utils/errorsList.js"




const createPassenger = async(passenger)=>{
    const result = await passengerRepository.create(passenger)
    //console.log(result)
    if(!result>0)throw errorsList
}




export const passsengersServices = {
    createPassenger
}