import client from "../databse";
import Product from "../entities/product";

export type TopProduct = {
    productId: number;
    timesOrdered: number;
}

export type CartProduct = {
    productId: number;
    orderId: number;
    quantity: number;
}

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

    async addToCart(orderId: number, productId: number, quantity: number): Promise<CartProduct> {
        try {
            const connection = await client.connect();

            const data = await connection.query(`
            INSERT INTO order_product ("orderId", "productId", quantity)
            VALUES ($1, $2, $3) 
            RETURNING *
            ;
            `, [orderId, productId, quantity]);

            return data.rows[0];

        }
        catch (err) {
            throw new Error(err.message);
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

    async topProducts(limit: number): Promise<TopProduct[]> {
        try {
            const connection = await client.connect();
            
            const data = await connection.query(`
            SELECT "productId", COUNT("productId")::INT AS "timesOrdered"
            FROM order_product
            GROUP BY "productId"
            ORDER BY "timesOrdered" DESC
            LIMIT $1
            ;
            `, [limit]);

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