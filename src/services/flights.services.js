import { flightsRepository } from "../repositories/flights.repositories.js"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat.js"
import errorsList from "../utils/errorsList.js"

dayjs.extend(customParseFormat)

const checkExistence = async(b)=>{
    const origin =  await flightsRepository.checkOriginExistence(b.origin)
    if(!origin>0)throw errorsList.notFound('origin')
    const destination = await flightsRepository.checkDestinationExistence(b.destination)
    if(!destination>0)throw errorsList.notFound('destination')

}

const checkDate = (date)=>{
    const currentDate = dayjs();
    const flightDate =  dayjs(date, 'DD-MM-YYYY');
    if(flightDate <= currentDate)throw errorsList.invalidDate;
}

const insertFlight = async(body)=>{
    return await flightsRepository.insertFlight(body);
}

const verifyIfOriginAndDestinationAreSame = (body)=>{
    if(body.origin === body.destination)throw errorsList.equalCities
}



export const flightsServices = {
    checkExistence,
    checkDate,
    insertFlight,
    verifyIfOriginAndDestinationAreSame
}