import { passengerRepository } from "../repositories/passengers.repositories.js"
import errorsList from "../utils/errorsList.js"




const createPassenger = async(passenger)=>{
    const result = await passengerRepository.create(passenger)
    //console.log(result)
    if(!result>0)throw errorsList
}

const getPassengersAndTravels =  async(query)=>{
    let sqlString = '';
    const { name } = query;
    
    if(name)sqlString += ` WHERE passengers."firstName" || ' ' || passengers."lastName" ILIKE '%${name}%'`;
    
    const result = await passengerRepository.getPassengersAndTravels(sqlString)
    if(result.length > 10)throw errorsList.manyItems
    return result;
}


export const passsengersServices = {
    createPassenger,
    getPassengersAndTravels
}