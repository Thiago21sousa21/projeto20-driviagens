import { flightsRepository } from "../repositories/flights.repositories.js"
import dayjs from "dayjs"
import errorsList from "../utils/errorsList.js"

const checkExistence = async(citiesId)=>{
    const result =  await flightsRepository.checkExistence(citiesId)
    if(result.rowCount!==2)throw errorsList.notFound
}

const checkDate = (date)=>{
    const currentDate = dayjs();
    const flightDate =  dayjs(date);

    if(flightDate <= currentDate)throw errorsList.invalid;
}

const insertFlight = async(body)=>{
    return await flightsRepository.insertFlight();
}

const verifyIfOriginAndDestinationAreSame = (body)=>{
    if(body.origin === body.destination)throw errorsList.conflict
}



export const flightsServices = {
    checkExistence,
    checkDate,
    insertFlight
}