import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()
const {Pool} = pg
console.log('aqui é o pool que eu queria testar')
console.log(Pool)

const configDatabase = {
    connectionString: process.env.DATABASE_URL
}

if(process.env.NODE_ENV === 'production')configDatabase.ssl = true

export const db = new Pool(configDatabase)