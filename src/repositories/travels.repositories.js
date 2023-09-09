import { db } from "../database.connection/database.connection.js"


const checkFlightExistence = async(flightId)=>{
    const result = await db.query(`
        SELECT 1 FROM flights WHERE id = $1
    `,[flightId]);
    return result.rowCount
}
const checkPassengerExistence = async(passengerId)=>{
    const result = await db.query(`
        SELECT 1 FROM passengers WHERE id = $1
    `,[passengerId]);
    return result.rowCount
}

const insertNewTravel = async(b)=>{
    const result = await db.query(`
        INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);
    `,[b.passengerId, b.flightId]);
    return result.rowCount
}

export const travelsRepositories = {
    checkFlightExistence,
    checkPassengerExistence,
    insertNewTravel
}