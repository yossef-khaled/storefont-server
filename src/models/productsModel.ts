import client from "../databse";
import Product from "../entities/product";

class ProductsModel {
    async index(): Promise<Product[]> {
        try {
            const connection = await client.connect();
        
            const data = await connection.query(`
            SELECT * FROM products;
            `);
            
            connection.release();
            
            return data.rows;
        }
        catch (err) {
            console.log(err);
            throw new Error(err);
        }
    }

    async show(id: number): Promise<Product> {
        try {
            const connection = await client.connect();
        
            const data = await connection.query(`
            SELECT * FROM products WHERE products.id=$1;
            `, [id]);
            
            connection.release();
            
            return data.rows[0];
        }
        catch (err) {
            console.log(err);
            throw new Error(err); 
        }
    }

    async create(product: Product): Promise<Product> {
        try {
            const connection = await client.connect();
            
            const data = await connection.query(`
            INSERT INTO products (name, price, category) VALUES($1, $2, $3) RETURNING *;
            `, [product.name, product.price, product.category]);
            
            connection.release();
            
            return data.rows[0];
        }
        catch (err) {
            console.log(err);
            throw new Error(err); 
        }
    }

    async productsByCategory(category: string): Promise<Product[]> {
        try {
            const connection = await client.connect();
         
            const data = await connection.query(`
            SELECT * FROM products WHERE products.category = $1;
            `, [category]);
            
            connection.release();
            
            return data.rows;
        }
        catch (err) {
            console.log(err);
            throw new Error(err); 
        }
    }

    async topProducts(): Promise<Product[]> {
        try {
            const connection = await client.connect();
            
            const data = await connection.query(`
            SELECT "productId", COUNT("productId") AS times_ordered
            FROM order_product
            GROUP BY "productId"
            ORDER BY times_ordered DESC
            LIMIT 5
            ;
            `);
            
            connection.release();
            
            return data.rows;
        }
        catch (err) {
            console.log(err);
            throw new Error(err); 
        }
    }
}

export default ProductsModel;