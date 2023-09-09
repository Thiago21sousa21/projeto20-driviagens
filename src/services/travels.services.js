import { travelsRepositories } from "../repositories/travels.repositories.js"
import errorsList from "../utils/errorsList.js"


const checkExistence = async(b)=>{
    const flight = await travelsRepositories.checkFlightExistence(b.flightId)
    if(!flight>0)throw errorsList.notFound('flight');
    const passenger = await travelsRepositories.checkPassengerExistence(b.passengerId)
    if(!passenger>0)throw errorsList.notFound('passenger');
}

const insertNewTravel = async(b)=>{
    const result = await travelsRepositories.insertNewTravel(b)
    if(!result>0)throw errorsList.internal
}


export const travelsServices = {
    checkExistence,
    insertNewTravel
}