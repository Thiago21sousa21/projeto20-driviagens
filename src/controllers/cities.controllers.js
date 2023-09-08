import { citiesServices } from "../services/cities.services.js"

export const createCity = async(req, res)=>{   
    await citiesServices.createCity(req.body);
    return res.sendStatus(201)     
}

