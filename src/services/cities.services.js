import { citiesRepository } from "../repositories/cities.repositories.js"


const createCity =  async(city)=>{
    return citiesRepository.create(city.name)
}

export const citiesServices = {
    createCity
}