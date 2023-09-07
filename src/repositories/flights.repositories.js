import { db } from "../database.connection/database.connection.js"

const checkExistence = async(citiesId)=>{
    const {origin, destination} = citiesId
    const result = await db.query(`
        SELECT id FROM cities WHERE id IN ($1, $2);
    `, [origin, destination])
    return result.rowCount
}

const insertFlight = async(body)=>{
    const {origin, destination, date} = body

    const result =  await db.query(`
        INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);
    `, [origin, destination, date])
    return result.rowCount
}


export const flightsRepository = {
    checkExistence,
    insertFlight
}