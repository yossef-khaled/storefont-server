import ProductsModel, { CartProduct, TopProduct } from "../../models/productsModel";
import dotenv from 'dotenv';

const productsModel: ProductsModel = new ProductsModel;

dotenv.config();

describe('Cart', () => {

    beforeEach(() => {
        process.env.ENV = 'test';
    });
    
    it('should add a product to cart', async () => {
        
        const expectedResult: CartProduct = await productsModel.addToCart(1, 1, 3);
        //@ts-ignore
        expect(expectedResult)
        .toEqual({
            productId: 1,
            orderId: 1,
            quantity: 3
        });
    });

    it('should return top product', async () => {
        
        const expectedResult: TopProduct[] = await productsModel.topProducts(1);
        //@ts-ignore
        expect(expectedResult)
        .toEqual([{
            productId: 1,
            timesOrdered: 1
        }]);
    });
})