import { flightsRepository } from "../repositories/flights.repositories.js"
import dayjs from "dayjs"

const checkExistence = async(citiesId)=>{
    return await flightsRepository.checkExistence(citiesId)
}

const checkDate = (date)=>{
    const currentDate = dayjs();
    const flightDate =  dayjs(date);

    if(flightDate <= currentDate)throw'';
}

const insertFlight = async(body)=>{
    return await flightsRepository.insertFlight();
}




export const flightsServices = {
    checkExistence,
    checkDate,
    insertFlight
}