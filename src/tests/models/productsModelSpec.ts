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

        const response = await request('localhost:3000')
        .post('/products')
        .set(tokenHeader)
        .send({
            id: 1,
            name: 'Test Product',
            category: 'Test_Category',
            price: 50
        })

        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({
            id: 1,
            name: 'Test Product',
            category: 'Test_Category',
            price: 50
        });
    });

    it('should return product with id = 1 ', async () => {
       
        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        const response = await request('localhost:3000')
        .get('/products/key=id&value=1')
        .set(tokenHeader)
        
        expect(response.body).toEqual({
            id: 1,
            name: 'Test Product',
            category: 'Test_Category',
            price: 50
        })
        expect(response.statusCode).toEqual(200)
    });

    it('should return products under the category Test_Category', async () => {
       
        const tokenHeader = {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3RfVXNlciIsImlkIjo4NywiaWF0IjoxNjYyNjUwMjQwfQ.duLlc1-DAq2DT3d9hgrY0VlxCAAuLfsT1R1RUklsSkU"
        }

        const response = await request('localhost:3000')
        .get('/products/key=category&value=Test_Category')
        .set(tokenHeader)
        
        expect(response.body).toEqual([{
            id: 1,
            name: 'Test Product',
            category: 'Test_Category',
            price: 50
        }])
        expect(response.statusCode).toEqual(200)
    });


    it('should return a product after creating one', async () => {
        const product: Product = {
            id: 2,
            name: 'Test Product2',
            category: 'Test_Category',
            price: 40,
        }
        const expectedResult = await productsModel.create(product);
        expect(expectedResult)
        .toEqual(product);
    });

    it('should return all products', async () => {
       
        const expectedResult: Product[] = await productsModel.index();
        expect(expectedResult)
        .toEqual([{
            id: 1,
            name: 'Test Product',
            category: 'Test_Category',
            price: 50 
        }, {
            id: 2,
            name: 'Test Product2',
            category: 'Test_Category',
            price: 40,
        }]);
    });

    it('should return product with id = 2', async () => {
       
        const expectedResult: Product = await productsModel.show(2);
        expect(expectedResult)
        .toEqual({
            id: 2,
            name: 'Test Product2',
            category: 'Test_Category',
            price: 40
        });
    });

    it('should return products under the category Test Category ', async () => {
       
        const expectedResult: Product[] = await productsModel.productsByCategory('Test_Category');
        
        expect(expectedResult)
        .toEqual([{
            id: 1,
            name: 'Test Product',
            category: 'Test_Category',
            price: 50 
        }, {
            id: 2,
            name: 'Test Product2',
            category: 'Test_Category',
            price: 40,
        }]);
    });

})