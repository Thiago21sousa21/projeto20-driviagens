import { db } from "../database.connection/database.connection.js"

const create = async(passenger)=>{
    const result = await db.query(`
        INSERT INTO passengers ("firstName" , "lastName") VALUES ($1, $2)
        `,[passenger.firstName, passenger.lastName])
        console.log(result)
    return result.rowCount;
}

const getPassengersAndTravels =  async(sql = '')=>{
    const result = await db.query(`
    
        SELECT passengers."firstName" || ' ' || passengers."lastName" AS passenger, COUNT(travels.id) AS travels
        FROM passengers
        LEFT JOIN travels ON passengers.id = travels."passengerId"
        ${sql}
        GROUP BY passenger ORDER BY travels DESC LIMIT 10;
    
    `);

    return result.rows;

}

export const passengerRepository = {
    create,
    getPassengersAndTravels
}
