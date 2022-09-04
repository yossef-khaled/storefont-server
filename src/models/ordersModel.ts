import Order from "../entities/order";
import client from "../databse";

class OrdersModel {
    async ordersHistory(id: number): Promise<Order[]> {
        try {
            const connection = await client.connect();
        
            const data = await connection.query(`
            SELECT * FROM orders WHERE orders."userId" = $1 
            AND orders."orderStatus" = 'complete';
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

    async currentOrder(id: number): Promise<Order> {
        try {
            const connection = await client.connect();
        
            const data = await connection.query(`
            SELECT * FROM orders WHERE orders."userId" = $1 
            AND orders."orderStatus" = 'inCart';
            `, [id]);
            
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