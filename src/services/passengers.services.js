import { passengerRepository } from "../repositories/passengers.repositories.js"
const createPassenger = (passenger)=>{
    return passengerRepository.create(passenger)
}

export const passsengersServices = {
    createPassenger
}