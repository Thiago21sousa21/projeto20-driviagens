import httpStatus from "http-status"
import { travelsServices } from "../services/travels.services.js"


const insertNewTravel = async(req, res)=>{
    //verificar se os ids constam na lista de dados
    await travelsServices.checkExistence(req.body)
    return res.sendStatus(httpStatus.CREATED)
}


export const travelControllers = {
    insertNewTravel
}
