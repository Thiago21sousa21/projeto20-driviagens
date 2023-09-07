import { db } from "../database.connection/database.connection.js"

const create = async(passenger)=>{
    const result = await db.query(`
        INSERT INTO passengers ("firstName" , "lastName") VALUES ($1, $2)
        `,[passenger.firstName, passenger.lastName])
        console.log(result)
    return result.rowCount;
}

export const passengerRepository = {
    create
}
