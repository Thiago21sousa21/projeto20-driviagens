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

const  getFlights = async(comand)=>{
    const flights = await db.query(`
        SELECT
            f.id AS "id",
            orig.name AS "origin",
            dest.name AS "destination",
            TO_CHAR(f."date", 'DD-MM-YYYY') AS "date"
        FROM flights AS f
        JOIN cities AS orig ON f.origin = orig.id
        JOIN cities AS dest ON f.destination = dest.id;
    `);
    return flights.rows
}


export const flightsRepository = {
    checkOriginExistence,
    checkDestinationExistence,
    insertFlight,
    getFlights
}