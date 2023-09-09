import httpStatus from "http-status";
import { flightsServices } from "../services/flights.services.js"


const newFlight = async(req, res)=>{
    //verificar se as cidades existem
    await flightsServices.checkExistence(req.body);
    //verificar se a origem e o destino são iguais
    flightsServices.verifyIfOriginAndDestinationAreSame(req.body);
    //verificar se a data é maior
    flightsServices.checkDate(req.body.date);
    //inserir novo voo
    await flightsServices.insertFlight(req.body);
    return res.sendStatus(httpStatus.CREATED);
}

const  getFlights = async(req, res)=>{
    
    await flightsServices.getFlights(req.query)
}

export const flightsControllers = {
    newFlight,
    getFlights
}
