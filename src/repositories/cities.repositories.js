import { db } from '../database.connection/database.connection.js'
import errorsList from '../utils/errorsList.js'


const create = async(city)=>{
    const result = await db.query(`
        INSERT INTO cities (name) VALUES ($1)
    `,[city])
    if(result.rowCount === 0)throw errorsList.conflict     
}

export const citiesRepository = {
    create
}