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

const validateAndCompareDates = (smallerDate, biggerDate, constraints, justDate)=>{
    //se não tem data não prossegue
    if(!smallerDate && !biggerDate)return '';
    //se tem data verificar se estão no forma to e se estão as duas
    const dates = {smallerDate, biggerDate}
    const validation = datesSchema.validate(dates , {abortEarly: false});
    if ( validation.error){
        const errors = validation.error.details.map(detail => detail.message);
        throw errorsList.schema(errors);
    }  
    //converter para um tipo data e verificar se a menor é maior
    let parseSmallerDate = dayjs(smallerDate, 'DD-MM-YYYY')
    let parseBiggerDate = dayjs(biggerDate, 'DD-MM-YYYY')
    if(parseSmallerDate.isAfter(parseBiggerDate))throw errorsList.invalidDate
    //converter de volta para string no formado do banco
    parseSmallerDate = parseSmallerDate.format('YYYY-MM-DD')
    parseBiggerDate = parseBiggerDate.format('YYYY-MM-DD')
    //adicionar ao array
    constraints.push(parseSmallerDate)
    constraints.push(parseBiggerDate)
    //verificar se é somente a data e retonar a string
    if(justDate) return ` f."date" BETWEEN $${constraints.length-1} AND $${constraints.length}`;
    return ` AND f."date" BETWEEN $${constraints.length-1} AND $${constraints.length}`
}

const  getFlights = async(query)=>{
    let justDate = true;
    let comand = '';
    let constraints = [];
    const {origin, destination} = query;
    const smallerDate = query['smaller-date']
    const biggerDate = query['bigger-date']
    if( origin || destination || smallerDate || biggerDate)comand+=' WHERE'
    if(origin && destination){
        justDate = false;
        constraints.push(origin)
        constraints.push(destination)
        comand+=` orig.name = $${constraints.length-1} AND dest.name = $${constraints.length}`
    }else if(destination && !origin){
        justDate = false;
        constraints.push(destination)
        comand+=` dest.name = $${constraints.length}`
    }else if(origin && !destination){
        justDate = false;
        constraints.push(origin)
        comand+=` orig.name = $${constraints.length}`
    }
    comand+= validateAndCompareDates(smallerDate, biggerDate, constraints, justDate);

    const flights = await flightsRepository.getFlights(comand, constraints)
    return flights;
}


export const flightsServices = {
    checkExistence,
    checkDate,
    insertFlight,
    verifyIfOriginAndDestinationAreSame,
    getFlights
}