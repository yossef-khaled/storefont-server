import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let  {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_DB_TEST,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    ENV
} = process.env;

console.log('ENV is : ', ENV);

const client = new Pool({
    host: POSTGRES_HOST,
    database: ENV === 'dev' ? POSTGRES_DB : POSTGRES_DB_TEST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
})

export default client;