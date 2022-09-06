import ProductsModel from "../../models/productsModel";
import Product from "../../entities/product";
import dotenv from 'dotenv';

const productsModel: ProductsModel = new ProductsModel;

dotenv.config();

describe('Products model', () => {
    beforeEach(() => {
        process.env.ENV = 'test';
    });

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
        //@ts-ignore
        const product: Product = {
            id: 1,
            name: 'Test Product',
            category: 'Test Category',
            price: 50,
        }
        const expectedResult = await productsModel.create(product);
        //@ts-ignore
        expect(expectedResult)
        .toEqual(product);
    });

    it('should return all products', async () => {
       
        const expectedResult: Product[] = await productsModel.index();
        //@ts-ignore
        expect(expectedResult)
        .toEqual([{
            id: 1,
            name: 'Test Product',
            category: 'Test Category',
            price: 50 
        }]);
    });

    it('should return product with id = 1 ', async () => {
       
        const expectedResult: Product = await productsModel.show(1);
        //@ts-ignore
        expect(expectedResult)
        .toEqual({
            id: 1,
            name: 'Test Product',
            category: 'Test Category',
            price: 50 
        });
    });

    it('should return products under the category Test Category ', async () => {
       
        const expectedResult: Product[] = await productsModel.productsByCategory('Test Category');
        //@ts-ignore
        expect(expectedResult)
        .toEqual([{
            id: 1,
            name: 'Test Product',
            category: 'Test Category',
            price: 50 
        }]);
    });

})