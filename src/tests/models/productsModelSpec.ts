import ProductsModel from "../../models/productsModel";
import Product from "../../entities/product";
import request from 'supertest';

const productsModel: ProductsModel = new ProductsModel;

describe('Products model', () => {
    it('should have an index method', () => {
        expect(productsModel.index).toBeDefined();
    });

    it('should have a show method', () => {
        expect(productsModel.show).toBeDefined();
    });

    it('should have a create method', () => {
        expect(productsModel.create).toBeDefined();
    });

    it('should have a get products with category method', () => {
        expect(productsModel.productsByCategory).toBeDefined();
    });

    it('should have a top products method', () => {
        expect(productsModel.topProducts).toBeDefined();
    });

    it('should return a product after creating one', async () => {

        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        request('localhost:3000')
        .post('/products')
        .set(tokenHeader)
        .send({
            name: 'Test Product',
            category: 'Test_Category',
            price: 50
        })
        .expect(200)
    });

    it('should return all products', async () => {
        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        request('localhost:3000')
        .get('/products')
        .set(tokenHeader)
        .expect(200)
    });

    it('should return product with id = 1 ', async () => {
       
        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        request('localhost:3000')
        .get('/products/key=id&value=1')
        .set(tokenHeader)
        .expect(200)
    });

    it('should return products under the category Test_Category', async () => {
       
        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        request('localhost:3000')
        .post('/products/key=category&value=Test_Category')
        .set(tokenHeader)
        .expect(200)
    });

})