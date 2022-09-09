import dotenv from 'dotenv';
import request from "supertest";

dotenv.config();

describe('Cart', () => {

    beforeEach(() => {
        process.env.ENV = 'test';
    });
    
    it('should add a product to cart', async () => {

        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        request('localhost:3000')
        .post('/products/addToCart=1')
        .set(tokenHeader)
        .send({
            productId: 1,
            quantity: 3
        })
        .expect(200)
    });

    it('should return top product', async () => {
        
        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        request('localhost:3000')
        .post('/products/key=topProduct&value=1')
        .set(tokenHeader)
        .expect(200)
    });
})