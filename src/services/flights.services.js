import { flightsRepository } from "../repositories/flights.repositories.js"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat.js"
import errorsList from "../utils/errorsList.js"
import Joi from "joi"
import { datesSchema } from "../schemas/schemas.js"

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

const validateAndCompareDates = (smallerDate, biggerDate, constraints)=>{
    if(!smallerDate && !biggerDate)return '';
    const dates = {smallerDate, biggerDate}
    const validation = datesSchema.validate(dates , {abortEarly: false});
    if ( validation.error){
        const errors = validation.error.details.map(detail => detail.message);
        throw errorsList.schema(errors);
    }  

    let parseSmallerDate = dayjs(smallerDate, 'DD-MM-YYYY')
    let parseBiggerDate = dayjs(biggerDate, 'DD-MM-YYYY')
    if(parseSmallerDate.isAfter(parseBiggerDate))throw 'data de origem não pode ser maior que a data '

    parseSmallerDate = parseSmallerDate.format('YYYY-MM-DD')
    parseBiggerDate = parseBiggerDate.format('YYYY-MM-DD')

    return ` AND date >= $${constraints+1} AND date <= $${constraints+2}`
}

const  getFlights = async(query)=>{
    let comand = '';
    let constraints = 0;
    const {origin, destination} = query;
    const smallerDate = query['smaller-date']
    const biggerDate = query['bigger-date']
    if( origin || destination || smallerDate || biggerDate)comand+=' WHERE'
    if(origin && destination){
        constraints = constraints+2
        comand+=` origin = $${constraints -1} AND destination = $${constraints}`
    }else if(destination && !origin){
        constraints++
        comand+=` destination = $${constraints}`
    }else if(origin && !destination){
        constraints++
        comand+=` origin = $${origin}`
    }
    comand+= validateAndCompareDates(smallerDate, biggerDate, constraints);

    await flightsRepository.getFlights(comand)
}


export const flightsServices = {
    checkExistence,
    checkDate,
    insertFlight,
    verifyIfOriginAndDestinationAreSame,
    getFlights
}