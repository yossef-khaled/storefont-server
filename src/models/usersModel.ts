import client from "../databse";
import User from "../entities/user";

class UsersModel {
    async index(): Promise<User[]> {
        try {
            const connection = await client.connect();
        
            const data = await connection.query(`
            SELECT * FROM users;
            `);
            
            connection.release();
            
            return data.rows;
        }
        catch (err) {
            throw new Error(err);
        }
    }

    async show(id: number): Promise<User> {
        try {
            const connection = await client.connect();
        
            const data = await connection.query(`
            SELECT * FROM users WHERE users.id=$1;
            `, [id]);
            
            connection.release();
            
            return data.rows[0];
        }
        catch (err) {
            throw new Error(err); 
        }
    }

    async create(user: User): Promise<User> {
        try {
            const connection = await client.connect();
            
            // @ts-ignore
            const data = await connection.query(`
            INSERT INTO users (firstname, lastname, password) VALUES($1, $2, $3) RETURNING *;
            `, [user.firstname, user.lastname, user.password]);
            
            connection.release();
            
            return data.rows[0];
        }
        catch (err) {
            console.log(err);
            throw new Error(err); 
        }
    }
}

export default UsersModel;