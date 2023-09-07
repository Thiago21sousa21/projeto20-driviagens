import { citiesServices } from "../services/cities.services.js"

export const createCity = async(req, res)=>{
    try {
        const  result =  await citiesServices.createCity(req.body);
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

