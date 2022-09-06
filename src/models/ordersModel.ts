import Order from "../entities/order";
import client from "../databse";

class OrdersModel {
    
    async create(userId: number): Promise<Order> {
        try {
            const connection = await client.connect();
            const data = await connection.query(`
            INSERT INTO orders ("orderStatus", "userId")
            VALUES('inCart', $1)
            RETURNING *
            ;`, [userId]);

            return data.rows[0];
        }
        catch (err) {
            throw new Error(err.message);
        }
    }

    async ordersHistory(id: number): Promise<Order[]> {
        try {
            const connection = await client.connect();
        
            const data = await connection.query(`
            SELECT * FROM orders WHERE orders."userId" = $1 
            AND orders."orderStatus" = 'complete'
            ;
            `
            , [id]);
            
            connection.release();
            
            return data.rows;
        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

    async show(userId: number): Promise<Order> {
        try {
            const connection = await client.connect();
        
            const data = await connection.query(`
            SELECT * FROM orders WHERE orders."userId" = $1 
            AND orders."orderStatus" = 'inCart'
            ;
            `, [userId]);
            
            connection.release();
            
            return data.rows[0];
        }
        catch (err) {
            console.log(err);
            throw new Error(err); 
        }
    }

    async currentOrder(userId: number): Promise<Order> {
        try {
            const connection = await client.connect();
        
            const data = await connection.query(`
            SELECT * FROM orders WHERE orders."userId" = $1 
            AND orders."orderStatus" = 'inCart'
            ;
            `, [userId]);
            
            connection.release();
            
            return data.rows[0];
        }
        catch (err) {
            console.log(err);
            throw new Error(err); 
        }
    }
}

export default OrdersModel;