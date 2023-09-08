import httpStatus from "http-status";
import { flightsServices } from "../services/flights.services.js"


export const newFlight = async(req, res)=>{
    //verificar se as cidades existem
    await flightsServices.checkExistence(req.body);
    //verificar se a origem e o destino são iguais
    verifyIfOriginAndDestinationAreSame(req.body);
    //verificar se a data é maior
    flightsServices.checkDate(req.body.date);
    //inserir novo voo
    await flightsServices.insertFlight(req.body);
    return res.sendStatus(httpStatus.CREATED);
}