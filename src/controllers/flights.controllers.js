import { flightsServices } from "../services/flights.services"


export const newFlight = async(req, res)=>{
    //verificar se as cidades existem
    const checkExistence = await flightsServices.checkExistence(req.body);
    if(checkExistence !== 2)throw '';//significa que ele não achou os 2 ids

    //verificar se a data é maior
    flightsServices.checkDate(req.body.date);

    //inserir novo voo
    await flightsServices.insertFlight(req.body);
}