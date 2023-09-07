import db from './../database.connection/database.connection.js'

const create = async(city)=>{
    const result = await db.query(`
        INSERT INTO cities (name) VALUES ($1)
    `,[city])
    return result.rowCount
}

export const citiesRepository = {
    create
}