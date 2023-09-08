import { db } from "../database.connection/database.connection.js"

const checkOriginExistence = async(origin)=>{   
    const result = await db.query(`
        SELECT 1 FROM cities WHERE id = $1;
    `, [origin])
    return result.rowCount
}

const checkDestinationExistence = async(destination)=>{
    const result = await db.query(`
        SELECT 1 FROM cities WHERE id = $1;
    `, [destination])
    return result.rowCount
}

const insertFlight = async(body)=>{
    console.log(body)
    const {origin, destination, date} = body

    const result =  await db.query(`
        INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);
    `, [origin, destination, date])
    return result.rowCount
}


export const flightsRepository = {
    checkOriginExistence,
    checkDestinationExistence,
    insertFlight
}