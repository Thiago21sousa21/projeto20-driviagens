import { travelsServices } from "../services/travels.services.js"


const insertNewTravel = async(req, res)=>{
    //verificar se os ids constam na lista de dados
    await travelsServices.checkExistence(req.body)
}


export const travelControllers = {
    insertNewTravel
}
